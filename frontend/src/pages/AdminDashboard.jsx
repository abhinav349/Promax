import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import {
  ArrowLeft, LogOut, Loader2, Mail, Phone, FileText, Clock,
  Users, BarChart3, Inbox,
} from 'lucide-react'

export default function AdminDashboard() {
  const { user, token, logout } = useAuth()
  const navigate = useNavigate()
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login')
      return
    }
    axios
      .get('http://localhost:8000/api/quotes', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setQuotes(res.data.quotes))
      .catch((err) => setError(err.response?.data?.detail || 'Failed to load quotes'))
      .finally(() => setLoading(false))
  }, [user, token, navigate])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <header className="bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-neutral-400 hover:text-yellow-500 transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-lg font-bold font-serif text-yellow-500 tracking-widest">PROMAX</h1>
              <p className="text-[10px] text-neutral-500 tracking-wider uppercase">Admin Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-400">
              <Users size={14} className="inline mr-1" />
              {user?.username}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-neutral-400 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Inbox, label: 'Total Quotes', value: quotes.length },
            { icon: Users, label: 'This Month', value: quotes.filter(q => new Date(q.created_at) > new Date(Date.now() - 30 * 86400000)).length },
            { icon: BarChart3, label: 'This Week', value: quotes.filter(q => new Date(q.created_at) > new Date(Date.now() - 7 * 86400000)).length },
            { icon: Clock, label: 'Today', value: quotes.filter(q => new Date(q.created_at).toDateString() === new Date().toDateString()).length },
          ].map((stat) => (
            <div key={stat.label} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon size={18} className="text-yellow-500" />
                <span className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quotes table */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-800">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FileText size={18} className="text-yellow-500" />
              Quote Requests
            </h2>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={24} className="animate-spin text-yellow-500" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-400">{error}</div>
          ) : quotes.length === 0 ? (
            <div className="text-center py-20 text-neutral-500">
              <Inbox size={40} className="mx-auto mb-3 opacity-50" />
              <p>No quote requests yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-neutral-500 uppercase tracking-wider border-b border-neutral-800">
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Service</th>
                    <th className="px-6 py-3">Size</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {quotes.map((q, i) => (
                    <tr key={i} className="hover:bg-neutral-800/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{q.first_name} {q.last_name}</td>
                      <td className="px-6 py-4 text-neutral-400">
                        <Mail size={12} className="inline mr-1" />{q.email}
                      </td>
                      <td className="px-6 py-4 text-neutral-400">
                        <Phone size={12} className="inline mr-1" />{q.phone}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded">{q.service_type}</span>
                      </td>
                      <td className="px-6 py-4 text-neutral-400">{q.property_size}</td>
                      <td className="px-6 py-4 text-neutral-500 text-xs">
                        {new Date(q.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
