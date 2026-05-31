import { motion } from 'framer-motion'
import { Home, Building2, BedDouble, Sparkles, CalendarCheck } from 'lucide-react'

const SERVICES = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    desc: 'Thorough cleaning tailored to your home. We treat every room with care and attention to detail.',
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    desc: 'Professional cleaning solutions for offices, retail spaces, and commercial properties.',
  },
  {
    icon: BedDouble,
    title: 'Airbnb & Short-Term',
    desc: 'Quick turnaround cleaning between guests. Keep your ratings high with spotless spaces.',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    desc: 'Intensive cleaning that reaches every corner. Perfect for seasonal refreshes and move-ins.',
  },
  {
    icon: CalendarCheck,
    title: 'Regular Maintenance',
    desc: 'Scheduled cleaning plans that keep your property consistently clean and welcoming.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">Our Cleaning Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 transition-colors">
                <s.icon size={24} className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-yellow-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
