import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const SERVICE_TYPES = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Airbnb & Short-Term',
  'Deep Cleaning',
  'Regular Maintenance',
]

const PROPERTY_SIZES = [
  'Studio / 1 Bedroom',
  '2-3 Bedrooms',
  '4-5 Bedrooms',
  '6+ Bedrooms',
  'Commercial Space',
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(e.target)
    formData.append('access_key', 'YOUR_WEB3FORMS_KEY')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        e.target.reset()
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  const inputClass =
    'w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 transition-colors'

  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">Contact Us</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Get Your Free Quote</h2>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Ready to experience the ProMax difference? Fill out the form and our team will get
              back to you within 24 hours with a personalized quote.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: '(555) 123-4567' },
                { icon: Mail, label: 'hello@promaxclean.com' },
                { icon: MapPin, label: '123 Premium Ave, Suite 100' },
                { icon: Clock, label: 'Mon-Sat: 7AM - 8PM' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-yellow-500" />
                  </div>
                  <span className="text-neutral-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <div className="bg-neutral-800 border border-green-500/30 rounded-xl p-10 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quote Request Sent!</h3>
                <p className="text-neutral-400 text-sm mb-6">
                  Thank you! Our team will review your request and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-yellow-500 text-sm font-medium hover:underline"
                >
                  Submit Another Quote
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="first_name" placeholder="First Name *" required className={inputClass} />
                  <input name="last_name" placeholder="Last Name *" required className={inputClass} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="email" type="email" placeholder="Email Address *" required className={inputClass} />
                  <input name="phone" placeholder="Phone Number *" required className={inputClass} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select name="service_type" required className={inputClass}>
                    <option value="">Service Type *</option>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <select name="property_size" required className={inputClass}>
                    <option value="">Property Size *</option>
                    {PROPERTY_SIZES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="details"
                  placeholder="Additional details (optional)"
                  rows={4}
                  className={inputClass}
                />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-yellow-500 text-black font-semibold py-3.5 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Request Free Quote
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
