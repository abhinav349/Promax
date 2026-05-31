import { motion } from 'framer-motion'
import { Shield, GraduationCap, Leaf, Award } from 'lucide-react'

const REASONS = [
  { icon: Shield, title: 'Trusted & Reliable', desc: 'Fully insured, bonded, and background-checked team members you can count on.' },
  { icon: GraduationCap, title: 'Trained Professionals', desc: 'Our staff undergoes rigorous training to meet the highest industry standards.' },
  { icon: Leaf, title: 'Eco-Friendly Products', desc: 'We use only environmentally safe products that are tough on dirt, gentle on health.' },
  { icon: Award, title: '100% Satisfaction', desc: 'Not happy? We will re-clean for free. Your satisfaction is our guarantee.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=700&fit=crop"
                alt="Modern bathroom"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black rounded-xl px-6 py-4 shadow-lg">
              <p className="font-bold text-lg">100%</p>
              <p className="text-sm font-medium">Satisfaction Guaranteed</p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">Why ProMax</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8">
              Excellence is Our Habit
            </h2>

            <div className="space-y-6">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <r.icon size={22} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{r.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
