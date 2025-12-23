'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, FileText, Upload, Check } from 'lucide-react'

const steps = [
  {
    icon: ShoppingCart,
    step: '1',
    title: 'Purchase Campari',
    description: '200ml = 1 Entry\n750ml or 1L = 5 Entries',
  },
  {
    icon: FileText,
    step: '2',
    title: 'Complete Entry Form',
    description: 'Fill in your details via the form below or WhatsApp',
  },
  {
    icon: Upload,
    step: '3',
    title: 'Upload Receipt',
    description: 'Take a picture of your receipt as proof of purchase',
  },
  {
    icon: Check,
    step: '4',
    title: 'Get Confirmed',
    description: 'Receive your entry confirmation and ticket number',
  },
]

export default function HowToEnter() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          HOW TO <span className="gold-text">ENTER</span>
        </h2>
        <p className="text-white/70 text-lg">
          Follow these simple steps to enter the competition
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative"
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-campari-gold to-transparent" />
            )}

            <div className="glass-card p-6 text-center relative z-10 h-full">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-campari-gold rounded-full flex items-center justify-center">
                <span className="text-campari-deepRed font-bold">{item.step}</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-campari-gold" />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Entry Calculation Info */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <div className="glass-card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-campari-gold font-semibold text-xl mb-4">
                Entry Calculation
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">200ml</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-2 bg-campari-gold rounded-full w-[20%]" />
                    </div>
                    <p className="text-white mt-1">= 1 Entry</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">750ml</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-2 bg-campari-gold rounded-full w-full" />
                    </div>
                    <p className="text-white mt-1">= 5 Entries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1L</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-2 bg-campari-gold rounded-full w-full" />
                    </div>
                    <p className="text-white mt-1">= 5 Entries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-campari-gold font-semibold text-xl mb-4">
                Alternative Entry Method
              </h3>
              <p className="text-white/70 mb-4">
                You can also enter via WhatsApp by sending your receipt to:
              </p>
              <a
                href="https://wa.me/18884722672"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                1 (888) 472-2672
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
