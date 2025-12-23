'use client'

import { useState, useEffect } from 'react'
import AgeGate from '@/components/AgeGate'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import EntryForm from '@/components/EntryForm'
import Prizes from '@/components/Prizes'
import HowToEnter from '@/components/HowToEnter'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import FAQ from '@/components/FAQ'
import SocialLinks from '@/components/SocialLinks'
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
      <div className="min-h-screen bg-gradient-to-b from-campari-red to-campari-deepRed flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mb-4"></div>
          <p className="text-white/60 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen">
      {/* Age Gate Overlay */}
      {!isAgeVerified && (
        <AgeGate onVerify={handleAgeVerification} />
      )}
      
      {/* Navigation - Fixed Header */}
      <Navigation />
      
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Prizes Section */}
      <Prizes />
      
      {/* How to Enter Section */}
      <HowToEnter />
      
      {/* Entry Form Section */}
      <section id="entry-form" className="py-16 px-4 bg-gradient-to-b from-campari-darkRed to-campari-deepRed">
        <div className="max-w-4xl mx-auto">
          <EntryForm />
        </div>
      </section>
      
      {/* WhatsApp CTA Section */}
      <WhatsAppCTA />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Social Links Section */}
      <SocialLinks />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
