import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Essential',
    price: '$79',
    period: '/visit',
    desc: 'Perfect for regular upkeep of smaller spaces.',
    features: [
      'Up to 2 bedrooms',
      'Kitchen & bathrooms',
      'Vacuuming & mopping',
      'Surface dusting',
      'Trash removal',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/visit',
    desc: 'Our most popular plan for complete home care.',
    features: [
      'Up to 4 bedrooms',
      'Full kitchen deep clean',
      'All bathrooms sanitized',
      'Interior windows',
      'Appliance cleaning',
      'Laundry & bed making',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$299',
    period: '/visit',
    desc: 'The ultimate cleaning experience for larger properties.',
    features: [
      'Unlimited rooms',
      'Everything in Professional',
      'Carpet deep cleaning',
      'Upholstery treatment',
      'Fridge & oven interior',
      'Garage & outdoor areas',
      'Priority scheduling',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-3">Plans</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">Simple, Transparent Pricing</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-xl p-8 ${
                plan.popular
                  ? 'bg-neutral-900 border-2 border-yellow-500 shadow-xl shadow-yellow-500/10'
                  : 'bg-neutral-900 border border-neutral-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-yellow-500">{plan.price}</span>
                <span className="text-neutral-500 text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-neutral-400 mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check size={16} className="text-yellow-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded font-semibold text-sm transition-colors ${
                  plan.popular
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'border border-neutral-600 text-white hover:border-yellow-500 hover:text-yellow-500'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
