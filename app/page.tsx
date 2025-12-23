'use client'

import { useState, useEffect } from 'react'
import AgeGate from '@/components/AgeGate'
import Hero from '@/components/Hero'
import EntryForm from '@/components/EntryForm'
import Prizes from '@/components/Prizes'
import HowToEnter from '@/components/HowToEnter'
import Footer from '@/components/Footer'
import FloatingHearts from '@/components/FloatingHearts'

export default function Home() {
  const [isAgeVerified, setIsAgeVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user already verified age
    const verified = localStorage.getItem('campari_age_verified')
    if (verified === 'true') {
      setIsAgeVerified(true)
    }
    setIsLoading(false)
  }, [])

  const handleAgeVerification = (verified: boolean) => {
    if (verified) {
      localStorage.setItem('campari_age_verified', 'true')
      setIsAgeVerified(true)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen">
      <FloatingHearts />
      
      {!isAgeVerified && (
        <AgeGate onVerify={handleAgeVerification} />
      )}
      
      <Hero />
      
      <section id="prizes" className="py-16 px-4">
        <Prizes />
      </section>
      
      <section id="how-to-enter" className="py-16 px-4">
        <HowToEnter />
      </section>
      
      <section id="enter" className="py-16 px-4">
        <EntryForm />
      </section>
      
      <Footer />
    </main>
  )
}
