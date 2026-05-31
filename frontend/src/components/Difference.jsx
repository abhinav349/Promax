import { motion } from 'framer-motion'
import { CheckCircle, Users, MapPin, ThumbsUp, Clock } from 'lucide-react'

const FEATURES = [
  'Eco-Friendly Products',
  'Background-Checked Staff',
  'Satisfaction Guarantee',
  'Flexible Scheduling',
  'Transparent Pricing',
]

const STATS = [
  { icon: Users, value: '286+', label: 'Happy Clients' },
  { icon: MapPin, value: '6', label: 'Cities Served' },
  { icon: ThumbsUp, value: '96%', label: 'Satisfaction Rate' },
  { icon: Clock, value: '2', label: 'Years Experience' },
]

export default function Difference() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              The ProMax Difference
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We go beyond ordinary cleaning to deliver an exceptional experience you can trust every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-neutral-800/50 rounded-lg p-4"
              >
                <CheckCircle size={20} className="text-yellow-500 shrink-0" />
                <span className="text-neutral-200">{f}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-neutral-800 border border-neutral-700 rounded-xl p-8"
            >
              <s.icon size={28} className="text-yellow-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-neutral-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
