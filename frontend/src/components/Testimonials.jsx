import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    text: 'ProMax transformed our office space completely. The attention to detail is incredible — every surface gleams. We switched from our old service after one trial clean.',
    name: 'Sarah Mitchell',
    role: 'Office Manager, TechFlow Inc.',
  },
  {
    text: "As an Airbnb host, turnaround time is everything. ProMax consistently delivers spotless results in record time. My ratings went from 4.2 to 4.9 stars since hiring them.",
    name: 'David Chen',
    role: 'Property Host, 12 Listings',
  },
  {
    text: "I've used many cleaning services over the years, but ProMax is in a league of its own. Professional, punctual, and they genuinely care about quality. Highly recommended!",
    name: 'Maria Rodriguez',
    role: 'Homeowner',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">What Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 relative"
            >
              <Quote size={32} className="text-yellow-500/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">{r.text}</p>
              <div>
                <p className="font-semibold text-white">{r.name}</p>
                <p className="text-xs text-neutral-500">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
