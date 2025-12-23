'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToEntry = () => {
    document.getElementById('enter')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-8">
      {/* Animated Plane */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        initial={{ x: '-100%', y: '50%', rotate: -15 }}
        animate={{ 
          x: ['−100%', '150vw'],
          y: ['50%', '-50%'],
          rotate: [-15, -5]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className="relative w-32 md:w-48">
          {/* Plane SVG */}
          <svg viewBox="0 0 100 50" className="w-full drop-shadow-2xl">
            <defs>
              <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e5e5e5" />
              </linearGradient>
            </defs>
            <path
              d="M5 25 L30 20 L70 15 L95 25 L70 30 L30 28 Z"
              fill="url(#planeGradient)"
            />
            <path
              d="M40 20 L50 5 L55 20"
              fill="url(#planeGradient)"
            />
            <path
              d="M65 28 L75 40 L70 30"
              fill="url(#planeGradient)"
            />
            <ellipse cx="20" cy="24" rx="3" ry="2" fill="#333" />
            <ellipse cx="35" cy="23" rx="2" ry="1.5" fill="#87CEEB" />
            <ellipse cx="45" cy="22" rx="2" ry="1.5" fill="#87CEEB" />
            <ellipse cx="55" cy="22" rx="2" ry="1.5" fill="#87CEEB" />
          </svg>
          {/* Contrail */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-l from-white/40 to-transparent -z-10" />
        </div>
      </motion.div>

      {/* Floating Hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-6xl pointer-events-none"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wider drop-shadow-lg">
            CAMPARI
          </h1>
          <p className="text-campari-gold text-lg md:text-xl tracking-[0.4em] mt-2">
            RED PASSION
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <h2 className="hero-title font-display text-4xl md:text-7xl lg:text-8xl font-black">
            <span className="gold-text">WIN</span>{' '}
            <span className="text-white">YOUR</span>
          </h2>
          <h2 className="hero-title font-display text-4xl md:text-7xl lg:text-8xl font-black gold-text mt-2">
            PASSION MOMENT!
          </h2>
        </motion.div>

        {/* Bottles and Characters Container */}
        <motion.div
          className="relative mt-8 md:mt-12 h-64 md:h-96"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        >
          {/* Main Bottle - Center */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="relative w-24 md:w-40 h-48 md:h-80">
              {/* Bottle Shape */}
              <svg viewBox="0 0 80 200" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ED1C24" />
                    <stop offset="50%" stopColor="#FF4444" />
                    <stop offset="100%" stopColor="#B91C1C" />
                  </linearGradient>
                  <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8B7355" />
                  </linearGradient>
                </defs>
                {/* Cap */}
                <rect x="30" y="0" width="20" height="25" fill="url(#capGradient)" rx="2" />
                {/* Neck */}
                <path d="M32 25 L32 50 Q32 55 28 60 L28 70 L52 70 L52 60 Q48 55 48 50 L48 25 Z" fill="url(#bottleGradient)" />
                {/* Body */}
                <rect x="15" y="70" width="50" height="120" rx="5" fill="url(#bottleGradient)" />
                {/* Label */}
                <rect x="20" y="90" width="40" height="60" fill="#FFF8E7" rx="2" />
                <text x="40" y="115" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#ED1C24">CAMPARI</text>
                <text x="40" y="130" textAnchor="middle" fontSize="4" fill="#333">MILANO</text>
                {/* Highlight */}
                <rect x="20" y="70" width="8" height="110" fill="rgba(255,255,255,0.2)" rx="2" />
              </svg>
            </div>
          </motion.div>

          {/* Second Bottle - Left */}
          <motion.div
            className="absolute left-[15%] md:left-[25%] bottom-0 z-20"
            animate={{ y: [0, -15, 0], rotate: [-5, 0, -5] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          >
            <div className="w-16 md:w-28 h-32 md:h-56 opacity-80">
              <svg viewBox="0 0 80 200" className="w-full h-full drop-shadow-xl">
                <defs>
                  <linearGradient id="bottleGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C41E24" />
                    <stop offset="50%" stopColor="#ED1C24" />
                    <stop offset="100%" stopColor="#A01818" />
                  </linearGradient>
                </defs>
                <rect x="30" y="0" width="20" height="25" fill="url(#capGradient)" rx="2" />
                <path d="M32 25 L32 50 Q32 55 28 60 L28 70 L52 70 L52 60 Q48 55 48 50 L48 25 Z" fill="url(#bottleGradient2)" />
                <rect x="15" y="70" width="50" height="120" rx="5" fill="url(#bottleGradient2)" />
                <rect x="20" y="90" width="40" height="60" fill="#FFF8E7" rx="2" />
                <text x="40" y="115" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#ED1C24">CAMPARI</text>
              </svg>
            </div>
          </motion.div>

          {/* Carnival Dancer - Right Side */}
          <motion.div
            className="absolute right-[5%] md:right-[15%] bottom-0 z-20"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-24 md:w-40 h-48 md:h-72 flex items-end justify-center">
              {/* Stylized Carnival Dancer Silhouette */}
              <svg viewBox="0 0 100 180" className="w-full h-full">
                <defs>
                  <linearGradient id="costumeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FF6347" />
                  </linearGradient>
                  <linearGradient id="featherGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FF4500" />
                  </linearGradient>
                </defs>
                {/* Headdress Feathers */}
                <ellipse cx="50" cy="30" rx="35" ry="25" fill="url(#featherGradient)" opacity="0.9" />
                <ellipse cx="30" cy="25" rx="15" ry="20" fill="#FFD700" opacity="0.8" />
                <ellipse cx="70" cy="25" rx="15" ry="20" fill="#FF6347" opacity="0.8" />
                {/* Head */}
                <circle cx="50" cy="55" r="12" fill="#8B4513" />
                {/* Body */}
                <ellipse cx="50" cy="90" rx="15" ry="25" fill="url(#costumeGradient)" />
                {/* Arms */}
                <ellipse cx="30" cy="85" rx="8" ry="20" fill="#8B4513" transform="rotate(-30 30 85)" />
                <ellipse cx="70" cy="85" rx="8" ry="20" fill="#8B4513" transform="rotate(30 70 85)" />
                {/* Skirt */}
                <path d="M35 110 Q50 115 65 110 L75 170 Q50 175 25 170 Z" fill="url(#featherGradient)" />
                {/* Legs */}
                <rect x="40" y="150" width="8" height="30" fill="#8B4513" rx="3" />
                <rect x="52" y="150" width="8" height="30" fill="#8B4513" rx="3" />
                {/* Sparkles */}
                <circle cx="40" cy="70" r="2" fill="#FFF" opacity="0.8" />
                <circle cx="60" cy="80" r="2" fill="#FFF" opacity="0.8" />
                <circle cx="45" cy="100" r="1.5" fill="#FFF" opacity="0.6" />
              </svg>
            </div>
          </motion.div>

          {/* Couple Silhouette - Left Side */}
          <motion.div
            className="absolute left-[5%] md:left-[10%] bottom-0 z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <div className="w-20 md:w-32 h-40 md:h-56">
              <svg viewBox="0 0 100 150" className="w-full h-full opacity-90">
                <defs>
                  <linearGradient id="coupleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#333" />
                  </linearGradient>
                </defs>
                {/* Man */}
                <circle cx="35" cy="25" r="12" fill="url(#coupleGradient)" />
                <rect x="25" y="37" width="20" height="50" rx="8" fill="url(#coupleGradient)" />
                <rect x="22" y="87" width="10" height="40" rx="4" fill="url(#coupleGradient)" />
                <rect x="38" y="87" width="10" height="40" rx="4" fill="url(#coupleGradient)" />
                {/* Woman */}
                <circle cx="65" cy="30" r="10" fill="url(#coupleGradient)" />
                <path d="M55 40 Q65 45 75 40 L78 80 Q65 90 52 80 Z" fill="url(#coupleGradient)" />
                <rect x="55" y="80" width="8" height="45" rx="3" fill="url(#coupleGradient)" />
                <rect x="67" y="80" width="8" height="45" rx="3" fill="url(#coupleGradient)" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <div className="bg-campari-gold/90 backdrop-blur-sm py-4 px-6 md:px-12 rounded-lg inline-block mb-8">
            <p className="text-campari-deepRed font-bold text-lg md:text-2xl">
              BUY 1 200ML, 750ML OR 1L FOR A CHANCE TO WIN
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={scrollToEntry}
              className="btn-campari text-campari-deepRed text-lg md:text-xl px-12 py-5 animate-pulse-glow"
            >
              ENTER NOW
            </button>
          </div>

          <p className="text-white/70 text-sm mt-6">
            Promotion runs February 1st - March 29th, 2026
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-campari-deepRed to-transparent z-10" />
    </section>
  )
}
