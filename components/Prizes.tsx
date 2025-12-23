'use client'

import { motion } from 'framer-motion'
import { Plane, Hotel, Bed, PartyPopper, Tv } from 'lucide-react'

const prizes = [
  {
    icon: Plane,
    title: 'Four-Night Getaway',
    description: 'Trip for 2 to Dominican Republic',
    value: 'Grand Prize',
  },
  {
    icon: Hotel,
    title: 'Four-Night Staycation',
    description: 'For 2 at Sandals Jamaica',
    value: '2nd Prize',
  },
  {
    icon: Bed,
    title: 'Bedroom Set',
    description: 'Complete luxury bedroom furniture',
    value: '3rd Prize',
  },
  {
    icon: PartyPopper,
    title: 'Carnival Costumes',
    description: 'Premium carnival costume package',
    value: '4th Prize',
  },
  {
    icon: Tv,
    title: '55" Television',
    description: 'Smart TV for your home',
    value: '5th Prize',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

export default function Prizes() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          AMAZING <span className="gold-text">PRIZES</span>
        </h2>
        <p className="text-white/70 text-lg">
          Multiple chances to win across 4 draw dates
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
      >
        {prizes.map((prize, index) => (
          <motion.div
            key={prize.title}
            variants={itemVariants}
            className="prize-card group"
          >
            <div className="relative mb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-campari-gold/20 flex items-center justify-center group-hover:bg-campari-gold/30 transition-colors duration-300">
                <prize.icon className="w-8 h-8 text-campari-gold" />
              </div>
              <span className="absolute -top-2 -right-2 bg-campari-gold text-campari-deepRed text-xs font-bold px-2 py-1 rounded-full">
                {prize.value}
              </span>
            </div>
            <h3 className="text-white font-semibold text-sm md:text-base mb-1">
              {prize.title}
            </h3>
            <p className="text-white/60 text-xs md:text-sm">
              {prize.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Draw Dates */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <div className="glass-card inline-block px-8 py-6">
          <h3 className="text-campari-gold font-semibold mb-4 text-lg">DRAW DATES</h3>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              <span className="text-xs text-white/60 block">1st Draw</span>
              <span className="font-semibold">Feb 16, 2026</span>
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              <span className="text-xs text-white/60 block">2nd Draw</span>
              <span className="font-semibold">March 2, 2026</span>
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              <span className="text-xs text-white/60 block">3rd Draw</span>
              <span className="font-semibold">March 16, 2026</span>
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              <span className="text-xs text-white/60 block">4th Draw</span>
              <span className="font-semibold">March 30, 2026</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
