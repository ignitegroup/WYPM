'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AgeGateProps {
  onVerify: (verified: boolean) => void
}

export default function AgeGate({ onVerify }: AgeGateProps) {
  const [showError, setShowError] = useState(false)

  const handleYes = () => {
    onVerify(true)
  }

  const handleNo = () => {
    setShowError(true)
    setTimeout(() => {
      window.location.href = 'https://www.responsibility.org/'
    }, 2000)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="age-gate-overlay"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="glass-card p-8 md:p-12 max-w-lg mx-4 text-center"
        >
          {/* Campari Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-wider">
              CAMPARI
            </h1>
            <p className="text-campari-gold text-sm tracking-[0.3em] mt-2">RED PASSION</p>
          </motion.div>

          {!showError ? (
            <>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
                  Are you 18 years or older?
                </h2>
                <p className="text-white/70 text-sm mb-8">
                  You must be of legal drinking age to enter this site.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={handleYes}
                  className="btn-campari text-campari-deepRed font-bold px-12"
                >
                  YES, I AM
                </button>
                <button
                  onClick={handleNo}
                  className="px-12 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  NO, I'M NOT
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white/50 text-xs mt-8"
              >
                By entering this site, you agree to our Terms & Conditions and Privacy Policy.
                <br />
                Please drink responsibly.
              </motion.p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white"
            >
              <p className="text-xl mb-4">Sorry, you must be 18 or older to enter.</p>
              <p className="text-white/70">Redirecting you to a safe page...</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
