import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('promax_token'))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      axios
        .get(`${API}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setUser(res.data)
        })
        .catch(() => {
          localStorage.removeItem('promax_token')
          setToken(null)
          setUser(null)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [token])

  const login = async (username, password) => {
    const form = new URLSearchParams()
    form.append('username', username)
    form.append('password', password)
    const res = await axios.post(`${API}/api/auth/login`, form)
    localStorage.setItem('promax_token', res.data.access_token)
    setToken(res.data.access_token)
    setUser({ username, role: res.data.role })
    return res.data
  }

  const register = async (username, password) => {
    const form = new URLSearchParams()
    form.append('username', username)
    form.append('password', password)
    const res = await axios.post(`${API}/api/auth/register`, form)
    localStorage.setItem('promax_token', res.data.access_token)
    setToken(res.data.access_token)
    setUser({ username, role: res.data.role })
    return res.data
  }

  const logout = () => {
    localStorage.removeItem('promax_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
