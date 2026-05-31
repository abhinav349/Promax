import { motion } from 'framer-motion'
import { MousePointerClick, PhoneCall, SprayCan, ThumbsUp } from 'lucide-react'

const STEPS = [
  { num: '01', icon: MousePointerClick, title: 'Book Online', desc: 'Fill out our quick form or give us a call to schedule your service.' },
  { num: '02', icon: PhoneCall, title: 'We Confirm', desc: 'Our team will confirm your booking and address any special requests.' },
  { num: '03', icon: SprayCan, title: 'We Clean', desc: 'Our trained professionals arrive on time and deliver exceptional results.' },
  { num: '04', icon: ThumbsUp, title: 'You Approve', desc: 'Walk through the results. Not satisfied? We will re-clean for free.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">How It Works</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-yellow-500/50 to-transparent" />
              )}

              <div className="w-20 h-20 rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center mx-auto mb-5">
                <s.icon size={28} className="text-yellow-500" />
              </div>
              <span className="text-yellow-500 text-sm font-bold tracking-wider">{s.num}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
