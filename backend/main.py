from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel, EmailStr
from typing import Optional, Dict, List
from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from passlib.context import CryptContext
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("promax")

SECRET_KEY = "promax-secret-key-change-in-production"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

app = FastAPI(title="PROMAX Property Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Pydantic Models ──

class QuoteRequest(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str
    service_type: str
    property_size: str
    details: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str
    role: str

class UserOut(BaseModel):
    username: str
    role: str

# ── In-memory stores ──

USERS_DB: Dict[str, dict] = {
    "admin": {
        "username": "admin",
        "hashed_password": pwd_context.hash("admin123"),
        "role": "admin",
    },
}

quotes_store: List[dict] = []

# ── Auth helpers ──

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: Optional[str] = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = USERS_DB.get(username)
    if user is None:
        raise credentials_exception
    return user

def require_admin(user: dict = Depends(get_current_user)) -> dict:
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

# ── Endpoints ──

@app.get("/")
def health_check():
    return {"status": "healthy", "service": "PROMAX API"}

@app.post("/api/auth/register", response_model=Token)
def register(form: OAuth2PasswordRequestForm = Depends()):
    if form.username in USERS_DB:
        raise HTTPException(status_code=400, detail="Username already exists")
    USERS_DB[form.username] = {
        "username": form.username,
        "hashed_password": pwd_context.hash(form.password),
        "role": "customer",
    }
    token = create_access_token(
        {"sub": form.username, "role": "customer"},
        timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return {"access_token": token, "token_type": "bearer", "role": "customer"}

@app.post("/api/auth/login", response_model=Token)
def login(form: OAuth2PasswordRequestForm = Depends()):
    user = USERS_DB.get(form.username)
    if not user or not verify_password(form.password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    token = create_access_token(
        {"sub": user["username"], "role": user["role"]},
        timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return {"access_token": token, "token_type": "bearer", "role": user["role"]}

@app.get("/api/auth/me", response_model=UserOut)
def me(user: dict = Depends(get_current_user)):
    return {"username": user["username"], "role": user["role"]}

@app.post("/api/quote")
def create_quote(quote: QuoteRequest):
    entry = quote.model_dump()
    entry["created_at"] = datetime.now(timezone.utc).isoformat()
    quotes_store.append(entry)
    logger.info("New quote request: %s", entry)
    return {"status": "success", "message": "Quote request received"}

@app.get("/api/quotes")
def list_quotes(user: dict = Depends(require_admin)):
    return {"quotes": quotes_store}
