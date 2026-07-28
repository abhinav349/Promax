import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'SERVICES', href: '#services' },
  { label: 'WHY US', href: '#why-us' },
  { label: 'PROCESS', href: '#process' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'PRICING', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-2xl font-bold font-serif text-yellow-500 tracking-widest">
              PROMAX
            </span>
            <span className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase">
              Property Management
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm tracking-wider text-neutral-300 hover:text-yellow-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="bg-yellow-500 text-black text-sm font-semibold px-6 py-2.5 rounded hover:bg-yellow-400 transition-colors tracking-wider"
            >
              FREE QUOTE
            </a>
          </div>

          <button
            className="lg:hidden text-neutral-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-neutral-950/98 backdrop-blur-md border-t border-neutral-800">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm tracking-wider text-neutral-300 hover:text-yellow-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-yellow-500 text-black text-sm font-semibold px-6 py-2.5 rounded mt-4"
            >
              FREE QUOTE
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
