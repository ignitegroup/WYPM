import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Campari Red Passion',
  description: 'Privacy Policy for Campari Red Passion Win Your Passion Moment promotion',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-campari-gold hover:text-campari-lightGold mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="glass-card p-8 md:p-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-white/60 mb-8">Last Updated: February 1, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/80">
            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Campari Group and J. Wray & Nephew Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respect your privacy
                and are committed to protecting your personal data. This privacy policy explains how we
                collect, use, and safeguard your information when you participate in the Campari Red
                Passion &quot;Win Your Passion Moment&quot; promotion.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect the following types of personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, country of residence</li>
                <li><strong>Purchase Information:</strong> Receipt images, store name, purchase date, product details</li>
                <li><strong>Device Information:</strong> IP address, browser type, device type</li>
                <li><strong>Usage Data:</strong> How you interact with our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your personal information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and validate your competition entries</li>
                <li>Contact winners and arrange prize delivery</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our services and website experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure fair competition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third parties who help us operate the promotion (hosting, receipt processing)</li>
                <li><strong>Campari Group Companies:</strong> Other entities within the Campari Group</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Prize Partners:</strong> To facilitate prize delivery (e.g., travel partners for trip prizes)</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure cloud storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for the duration of the promotion and for a period
                of 12 months thereafter for record-keeping and legal compliance purposes. Receipt images
                are retained for 6 months after the promotion ends to handle any disputes.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at privacy@camparicaribbeanrewards.com
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">8. Cookies</h2>
              <p className="mb-4">Our website uses cookies for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality (age gate, form submission)</li>
                <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements (with consent)</li>
              </ul>
              <p className="mt-4">
                You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">9. International Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries outside Jamaica and the
                Caribbean. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-4">
                For questions about this privacy policy or your personal data, contact us at:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> privacy@camparicaribbeanrewards.com</li>
                <li><strong>WhatsApp:</strong> 1 (888) 472-2672</li>
                <li><strong>Address:</strong> J. Wray & Nephew Limited, 235 Spanish Town Road, Kingston, Jamaica</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. The latest version will always be
                available on this page with the &quot;Last Updated&quot; date. We encourage you to review this
                policy periodically.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
