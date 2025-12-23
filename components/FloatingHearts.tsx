'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Heart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generatedHearts: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 12 + Math.random() * 24,
      opacity: 0.1 + Math.random() * 0.2,
    }))
    setHearts(generatedHearts)
  }, [])

  return (
    <div className="hearts-container">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.x}%`,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          initial={{ y: '100vh', rotate: 0 }}
          animate={{
            y: '-100px',
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❤️
        </motion.div>
      ))}
      
      {/* Static decorative hearts */}
      <motion.div
        className="absolute top-[10%] left-[5%] text-6xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        ❤️
      </motion.div>
      
      <motion.div
        className="absolute top-[15%] right-[8%] text-4xl opacity-15"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
      >
        ❤️
      </motion.div>
      
      <motion.div
        className="absolute top-[40%] right-[3%] text-5xl opacity-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        ❤️
      </motion.div>
    </div>
  )
}
