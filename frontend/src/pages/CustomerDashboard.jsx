import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  ArrowLeft, LogOut, User, CalendarCheck, Star, Clock,
  FileText, Phone, Mail,
} from 'lucide-react'

const PAST_BOOKINGS = [
  { id: 1, service: 'Residential Cleaning', date: '2026-05-15', status: 'Completed', rating: 5 },
  { id: 2, service: 'Deep Cleaning', date: '2026-04-28', status: 'Completed', rating: 4 },
  { id: 3, service: 'Regular Maintenance', date: '2026-06-10', status: 'Upcoming', rating: null },
]

export default function CustomerDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!user) {
    navigate('/login')
    return null
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
              <p className="text-[10px] text-neutral-500 tracking-wider uppercase">Customer Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-400">
              <User size={14} className="inline mr-1" />
              {user.username}
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
        {/* Welcome */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-serif font-bold mb-2">
            Welcome back, <span className="text-yellow-500">{user.username}</span>
          </h2>
          <p className="text-neutral-400">Manage your bookings and account from here.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick actions */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CalendarCheck size={18} className="text-yellow-500" /> Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href="/#contact"
                  className="block w-full text-center bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors text-sm"
                >
                  Book New Cleaning
                </a>
                <a
                  href="/#pricing"
                  className="block w-full text-center border border-neutral-700 text-white py-3 rounded-lg hover:border-yellow-500 transition-colors text-sm"
                >
                  View Pricing
                </a>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Phone size={18} className="text-yellow-500" /> Need Help?
              </h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-yellow-500" /> (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-yellow-500" /> hello@promaxclean.com
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={14} className="text-yellow-500" /> Mon-Sat: 7AM - 8PM
                </li>
              </ul>
            </div>
          </div>

          {/* Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-800">
                <h3 className="font-semibold flex items-center gap-2">
                  <FileText size={18} className="text-yellow-500" /> Your Bookings
                </h3>
              </div>
              <div className="divide-y divide-neutral-800">
                {PAST_BOOKINGS.map((b) => (
                  <div key={b.id} className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{b.service}</p>
                      <p className="text-xs text-neutral-500 mt-1">{b.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          b.status === 'Completed'
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-yellow-500/10 text-yellow-500'
                        }`}
                      >
                        {b.status}
                      </span>
                      {b.rating && (
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={12} className="fill-current" />
                          <span className="text-xs">{b.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
