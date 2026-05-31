# PROMAX - Premium Property Management & Cleaning

A full-stack website for a premium property management and cleaning service.

## Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion + Lucide React
- **Backend**: FastAPI + Uvicorn + Pydantic + JWT Auth

## Project Structure

```
/backend     - FastAPI Python backend
/frontend    - React Vite frontend
```

## Getting Started

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Backend runs at `http://localhost:8000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

## Authentication

### Admin Login
- **Username**: `admin`
- **Password**: `admin123`
- Access: Admin dashboard with quote request management

### Customer Login
- Register a new account from the login page
- Access: Customer dashboard with booking history

### Public View
- The main landing page is accessible without login

## API Endpoints

| Method | Endpoint             | Description                    | Auth     |
|--------|---------------------|--------------------------------|----------|
| GET    | `/`                 | Health check                   | None     |
| POST   | `/api/auth/login`   | Login (returns JWT)            | None     |
| POST   | `/api/auth/register`| Register new customer          | None     |
| GET    | `/api/auth/me`      | Current user info              | JWT      |
| POST   | `/api/quote`        | Submit quote request           | None     |
| GET    | `/api/quotes`       | List all quotes (admin only)   | Admin JWT|
