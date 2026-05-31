import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-black/70 mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied clients who trust ProMax for their property care needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white font-semibold px-10 py-4 rounded hover:bg-neutral-900 transition-colors tracking-wider"
          >
            BOOK NOW <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold font-serif text-yellow-500 tracking-widest mb-2">PROMAX</h3>
              <p className="text-xs text-neutral-500 tracking-[0.2em] uppercase mb-4">Property Management</p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Premium property management and cleaning services. We don't just clean, we care.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#services" className="hover:text-yellow-500 transition-colors">Residential Cleaning</a></li>
                <li><a href="#services" className="hover:text-yellow-500 transition-colors">Commercial Cleaning</a></li>
                <li><a href="#services" className="hover:text-yellow-500 transition-colors">Airbnb & Short-Term</a></li>
                <li><a href="#services" className="hover:text-yellow-500 transition-colors">Deep Cleaning</a></li>
                <li><a href="#services" className="hover:text-yellow-500 transition-colors">Regular Maintenance</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#why-us" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#process" className="hover:text-yellow-500 transition-colors">How It Works</a></li>
                <li><a href="#reviews" className="hover:text-yellow-500 transition-colors">Testimonials</a></li>
                <li><a href="#pricing" className="hover:text-yellow-500 transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Contact Info</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>(555) 123-4567</li>
                <li>hello@promaxclean.com</li>
                <li>123 Premium Ave, Suite 100</li>
                <li>Mon-Sat: 7AM - 8PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">&copy; {new Date().getFullYear()} ProMax Property Management. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-neutral-600">
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
