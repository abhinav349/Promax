import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Premium Property Care
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              We Don't Just Clean,{' '}
              <span className="text-yellow-500 italic">We Care.</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
              We keep your space spotless, healthy, and welcoming. Experience the new
              standard of professional property care.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold px-8 py-3.5 rounded hover:bg-yellow-400 transition-colors"
              >
                GET A FREE QUOTE <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-neutral-600 text-white px-8 py-3.5 rounded hover:border-yellow-500 hover:text-yellow-500 transition-colors"
              >
                OUR SERVICES
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                ['500+', 'Happy Clients'],
                ['5+', 'Years Experience'],
                ['100%', 'Satisfaction'],
              ].map(([val, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-yellow-500">{val}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — image with badge */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=500&fit=crop"
                alt="Modern house"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-xl">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-2xl font-bold text-white">4.9</p>
              <p className="text-xs text-neutral-400">Average Client Rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
