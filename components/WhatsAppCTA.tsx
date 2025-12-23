'use client'

import { motion } from 'framer-motion'

export default function WhatsAppCTA() {
  const whatsappNumber = '18884722672'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-campari-deepRed via-campari-darkRed to-campari-deepRed">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#25D366] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#25D366] rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            {/* WhatsApp Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="w-20 h-20 mx-auto mb-6 bg-[#25D366] rounded-full flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.div>
            
            {/* Heading */}
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              PREFER TO ENTER VIA{' '}
              <span className="text-[#25D366]">WHATSAPP</span>?
            </h2>
            
            {/* Description */}
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Send your receipt and details to our WhatsApp number for quick and easy entry! 
              Our team will process your entry and send you confirmation.
            </p>
            
            {/* What to Send */}
            <div className="bg-white/5 rounded-xl p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-campari-gold font-semibold mb-4">Simply send us:</h3>
              <ul className="text-left text-white/80 space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-campari-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-campari-gold">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Your full name
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-campari-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-campari-gold">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Date of birth
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-campari-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-campari-gold">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Email address
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-campari-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-campari-gold">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Photo of your receipt
                </li>
              </ul>
            </div>
            
            {/* CTA Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#25D366]/30"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              1 (888) 472-2672
            </motion.a>
            
            {/* Note */}
            <p className="text-white/50 text-sm mt-6">
              Available during business hours • Response within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
