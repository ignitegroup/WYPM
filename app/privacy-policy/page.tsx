'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-campari-red via-campari-darkRed to-campari-deepRed">
      {/* Header */}
      <header className="py-6 px-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-bold text-white">
            CAMPARI
          </Link>
          <Link 
            href="/"
            className="text-campari-gold hover:text-campari-lightGold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <div className="glass-card p-8 md:p-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-campari-gold mb-8">
            Campari "Win Your Red Passion Moment" Promotion
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/90">
            
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                J. Wray & Nephew Limited ("we", "us", "our"), a member of the Campari Group, 
                is committed to protecting your privacy and personal information. This Privacy 
                Policy explains how we collect, use, disclose, and safeguard your information 
                when you participate in the Campari "Win Your Red Passion Moment" promotion 
                ("Promotion") through our website at www.camparicaribbeanrewards.com or via 
                WhatsApp.
              </p>
              <p>
                By entering this Promotion, you consent to the collection, use, and disclosure 
                of your personal information as described in this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-3">We collect the following personal information when you enter the Promotion:</p>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <h3 className="text-campari-gold font-semibold mb-2">Personal Information:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name</li>
                  <li>Telephone number</li>
                  <li>Date of birth</li>
                  <li>Email address</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <h3 className="text-campari-gold font-semibold mb-2">Proof of Purchase:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Receipt images showing store name, receipt number, and Campari purchase</li>
                  <li>Purchase date and location information extracted from receipts</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-campari-gold font-semibold mb-2">Technical Information:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Process entries:</strong> To register your entry, validate receipts, and calculate your entry count.</li>
                <li><strong>Conduct draws:</strong> To include eligible entries in prize draws and select winners.</li>
                <li><strong>Contact winners:</strong> To notify winners via phone and email and coordinate prize collection.</li>
                <li><strong>Verify identity:</strong> To confirm winner eligibility and prevent fraud.</li>
                <li><strong>Marketing communications:</strong> To contact you about this Competition during the Promotion period (with your consent).</li>
                <li><strong>Advertising:</strong> To feature winners in advertising (print, voice, or digital) related to this Competition.</li>
                <li><strong>Legal compliance:</strong> To comply with legal obligations and regulatory requirements.</li>
                <li><strong>Analytics:</strong> To analyze participation patterns and improve future promotions.</li>
              </ul>
            </section>

            {/* Consent for Use */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Your Consent</h2>
              <p className="mb-3">By entering this Promotion, you consent and agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>J. Wray & Nephew Limited's collection, use, and disclosure of your personal information as described herein.</li>
                <li>J. Wray & Nephew Limited (under the Campari brand) using your name and likeness in advertising and public relations campaigns relating to the Competition, in electronic, print, or other media, for no further consideration.</li>
                <li>J. Wray & Nephew Limited (JWN) or JWN representatives contacting you about this Competition for the period of this Promotion.</li>
                <li>Being featured in subsequent advertising (print, voice, or digital) as it relates to this specific Competition if you are selected as a winner.</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Data Sharing</h2>
              <p className="mb-3">We may share your personal information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Campari Group companies:</strong> For promotional and marketing purposes related to this Competition.</li>
                <li><strong>Service providers:</strong> Including Ignite Holdings Group of Companies Limited (our collaborative agency for draw management), website hosting providers, and communication service providers.</li>
                <li><strong>Prize fulfillment partners:</strong> Such as travel agencies (for Dominican Republic trip), Sandals Resorts, furniture suppliers, and Xodus Carnival.</li>
                <li><strong>Legal and regulatory authorities:</strong> When required by law or to protect our rights.</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Secure data encryption in transit and at rest</li>
                <li>Access controls limiting data access to authorized personnel</li>
                <li>Regular security assessments and updates</li>
                <li>Secure storage of receipt images</li>
              </ul>
              <p className="mt-3">
                However, no method of transmission over the Internet or electronic storage is 
                100% secure. While we strive to protect your personal information, we cannot 
                guarantee its absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information for the duration of the Promotion and for 
                a reasonable period thereafter to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Complete all prize distributions and redemptions</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve any disputes or claims</li>
                <li>Maintain records for audit purposes</li>
              </ul>
              <p className="mt-3">
                After this period, your personal information will be securely deleted or anonymized.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Your Rights</h2>
              <p className="mb-3">Subject to applicable law, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements).</li>
                <li><strong>Opt-out:</strong> Opt out of receiving marketing communications.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Cookies and Tracking</h2>
              <p className="mb-3">Our website uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Remember your age verification status</li>
                <li>Maintain your session during entry</li>
                <li>Analyze website usage and performance</li>
                <li>Improve user experience</li>
              </ul>
              <p className="mt-3">
                You can control cookies through your browser settings. However, disabling cookies 
                may affect your ability to use certain features of our website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites, including social media 
                platforms. We are not responsible for the privacy practices of these websites. 
                We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">11. Children's Privacy</h2>
              <p>
                This Promotion is not intended for individuals under 18 years of age. We do not 
                knowingly collect personal information from persons under 18. If we learn that 
                we have collected personal information from a minor, we will delete it promptly.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted 
                on this page with an updated revision date. We encourage you to review this 
                Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">13. Contact Us</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="mb-2">
                  <strong>J. Wray & Nephew Limited</strong><br />
                  (A member of the Campari Group)
                </p>
                <p className="mb-2">
                  <strong>Website:</strong>{' '}
                  <a href="https://www.camparicaribbeanrewards.com" className="text-campari-gold hover:underline">
                    www.camparicaribbeanrewards.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/18884722672" className="text-campari-gold hover:underline">
                    1 (888) 472-2672
                  </a>
                </p>
                <p>
                  <strong>Social Media:</strong>{' '}
                  <a href="https://instagram.com/camparicaribbean" className="text-campari-gold hover:underline">
                    @camparicaribbean
                  </a>
                </p>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">
              Must be 18 years or older to drink. Drink responsibly.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
