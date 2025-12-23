'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsAndConditionsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-campari-gold mb-8">
            Campari "Win Your Red Passion Moment" Promotion
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/90">
            
            {/* Section 1: Promotion Period */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Promotion Period</h2>
              <p>
                The Promotion is scheduled to begin on <strong>February 1st, 2026</strong> and 
                end on <strong>March 29th, 2026</strong>, subject to these terms and conditions.
              </p>
            </section>

            {/* Section 2: Eligibility */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Each entrant must be <strong>18 years or older</strong> at the time of purchase and at the date of submission of the competition entry form.</li>
                <li>Entrants must <strong>live or reside in Jamaica</strong>.</li>
                <li>Employees of J. Wray & Nephew Limited, Campari Group, their affiliates, agencies, and immediate family members are excluded from participation.</li>
              </ul>
            </section>

            {/* Section 3: Mechanics */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Entry Mechanics</h2>
              <div className="space-y-4">
                <p>Eligible participants must make a purchase at participating supermarkets, wholesalers, trend-leading accounts, restaurants, and service stations across Jamaica:</p>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold mb-2">Entry Allocation:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Purchase one (1) <strong>200ml</strong> bottle of Campari = <strong>1 Entry</strong></li>
                    <li>Purchase one (1) <strong>750ml or 1L</strong> bottle of Campari = <strong>5 Entries</strong></li>
                  </ul>
                </div>

                <p>Participants are required to scan the QR code seen on promotional materials, which will take them to <strong>www.camparicaribbeanrewards.com</strong>. Participants can also head to the website directly to enter or WhatsApp <strong>1(888) 472-2672</strong>.</p>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold mb-2">Entry Limits:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Maximum <strong>72 entries</strong> per receipt for 200ml purchases</li>
                    <li>Maximum <strong>60 entries</strong> per receipt for 750ml or 1L purchases</li>
                    <li>Each receipt can only be submitted <strong>once</strong> - duplicate receipt numbers will be rejected</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Entry Requirements */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Entry Requirements</h2>
              <p className="mb-3">Entrants must provide the following information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full Name</li>
                <li>Telephone Number</li>
                <li>Date of Birth</li>
                <li>Email Address</li>
                <li>A clear image of the receipt, which should show:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Name of the supermarket, wholesaler, or trend-leading account</li>
                    <li>Receipt number</li>
                    <li>The eligible Campari purchase(s)</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-3">
                For entries to be valid, receipts must be dated within the period of the Promotion, 
                i.e., <strong>February 1st, 2026 – March 29th, 2026</strong>.
              </p>
            </section>

            {/* Section 5: Draw Schedule */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Draw Schedule</h2>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold">First Draw</h3>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>Close of Entries: February 15, 2026 at 11:59 p.m.</li>
                    <li>Winner Draw: February 16, 2026 at 9:00 a.m.</li>
                    <li>Winner Announcement: February 17, 2026</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold">Second Draw</h3>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>Close of Entries: March 1st, 2026 at 11:59 p.m.</li>
                    <li>Winner Draw: March 2nd, 2026 at 9:00 a.m.</li>
                    <li>Winner Announcement: March 3rd, 2026</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold">Third Draw</h3>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>Close of Entries: March 15, 2026 at 11:59 p.m.</li>
                    <li>Winner Draw: March 16, 2026 at 9:00 a.m.</li>
                    <li>Winner Announcement: March 17, 2026</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold">Fourth Draw (Final)</h3>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>Close of Entries: March 29, 2026 at 11:59 p.m.</li>
                    <li>Winner Draw: March 30, 2026 at 9:00 a.m.</li>
                    <li>Winner Announcement: March 31, 2026</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/70">
                <strong>Note:</strong> Non-winning entries will be re-entered for the following draws.
              </p>
            </section>

            {/* Section 6: Prizes */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Prizes</h2>
              <p className="mb-4">
                There will be <strong>Thirty-Six (36) winners</strong> in total island-wide as follows:
              </p>

              <div className="space-y-3">
                <div className="bg-campari-gold/20 border border-campari-gold/50 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold">Grand Prize - Punta Cana Trip (4 Winners)</h3>
                  <p className="text-sm mt-1">
                    An all-expenses paid trip for the winner and one (1) guest to Punta Cana, Dominican Republic.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-semibold">Sandals Jamaica Staycation (4 Winners)</h3>
                  <p className="text-sm mt-1">
                    A four-night double occupancy accommodation at a Sandals Resort in Jamaica 
                    (to be determined at the sole discretion of J. Wray & Nephew Limited). 
                    Value not to exceed JMD$600,000 inclusive of taxes and gratuity.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-semibold">Bedroom Furniture Set (4 Winners)</h3>
                  <p className="text-sm mt-1">
                    A bedroom furniture set valued at Four Hundred and Fifty Thousand Jamaican Dollars (JMD$450,000).
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-semibold">Xodus Carnival Costume Package (12 Winners)</h3>
                  <p className="text-sm mt-1">
                    A Frontline Xodus Carnival Costume (Female) and Xodus Carnival T-Shirt Package 
                    for the winner and one (1) guest.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-semibold">55-inch Smart Television (12 Winners)</h3>
                  <p className="text-sm mt-1">
                    A 55-inch Smart Television for the winner.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
                <p className="text-sm">
                  <strong>Important:</strong> Entrants are only eligible to win <strong>one prize</strong> out of 
                  the five (5) available and cannot win more than one prize. Prizes are non-transferable 
                  and may not be exchanged for cash or a prize of equal value.
                </p>
              </div>
            </section>

            {/* Section 7: Selection Process */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Selection Process</h2>
              <div className="space-y-3">
                <p>
                  Only eligible entries will be submitted to the prize draw. All entries from participating 
                  supermarkets, wholesalers, trend-leading accounts, restaurants, and service stations will 
                  be combined for each draw.
                </p>
                <p>
                  Winners will be selected electronically via a <strong>Random Number Generation system</strong>, 
                  using Microsoft Excel at Ignite Holdings Group of Companies Limited at 57a Old Harbour Rd, 
                  Spanish Town, Jamaica.
                </p>
                <p>
                  At each draw, a second and third selection will be done for backup winners in case 
                  the primary winner cannot be reached or verified.
                </p>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-campari-gold font-semibold mb-2">Selection Order (per draw):</h3>
                  <ol className="list-decimal pl-6 space-y-1 text-sm">
                    <li>Punta Cana Trip (1 winner)</li>
                    <li>Sandals Jamaica (1 winner)</li>
                    <li>Bedroom Set (1 winner)</li>
                    <li>Xodus Carnival Costume (3 winners)</li>
                    <li>55-inch Television (3 winners)</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section 8: Winner Notification */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Winner Notification</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Winners will be contacted via phone and email.</li>
                <li>No more than <strong>two (2) phone call attempts</strong> will be made to contact any given entrant.</li>
                <li>Contact attempts will be made between <strong>10:00 a.m. and 5:00 p.m.</strong> on the applicable draw date.</li>
                <li>
                  Backup winners will be contacted if the primary winner:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Is not reached after two phone call attempts</li>
                    <li>Is unable to verify their entry or identity</li>
                    <li>Is unable to attend on presentation day</li>
                    <li>Is a member of any excluded groups</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Section 9: Prize Claim */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Prize Claim Requirements</h2>
              
              <p className="mb-4">
                All winners must present a <strong>valid Jamaican government-issued photo ID</strong> 
                (Driver's licence, Voters ID, or Passport) and the original or digital copy of the 
                physical receipt as proof of purchase.
              </p>

              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <h3 className="text-campari-gold font-semibold mb-2">Prize Claim Deadlines:</h3>
                <ul className="text-sm space-y-1">
                  <li>1st Drawing prizes: Claim by <strong>February 27, 2026</strong></li>
                  <li>2nd Drawing prizes: Claim by <strong>March 13, 2026</strong></li>
                  <li>3rd Drawing prizes: Claim by <strong>March 27, 2026</strong></li>
                  <li>4th Drawing prizes: Claim by <strong>April 10, 2026</strong></li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-campari-gold font-semibold mb-2">Prize Redemption Deadlines:</h3>
                <ul className="text-sm space-y-1">
                  <li>Dominican Republic Trip: Must be redeemed by <strong>October 31, 2026</strong></li>
                  <li>Sandals Accommodation: Must be redeemed by <strong>October 31, 2026</strong></li>
                  <li>Xodus Carnival Costume: Must be collected by <strong>April 10, 2026</strong></li>
                </ul>
              </div>

              <p className="mt-4 text-sm text-white/70">
                If prizes are not claimed or redeemed by the deadlines, they will be forfeited and 
                retained by J. Wray & Nephew Limited.
              </p>
            </section>

            {/* Section 10: Forfeit Conditions */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Prize Forfeit Conditions</h2>
              <p className="mb-3">A winner will forfeit their claim to a prize for any of the following reasons:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unable to produce a valid Jamaican government-issued ID and receipt as proof of purchase at time of collection.</li>
                <li>Unable to present a valid passport and/or sufficient documentation of eligibility for entrance into the Dominican Republic (for trip winners).</li>
                <li>Unable to present a valid proof of residence via a utility bill for the hotel accommodation prize.</li>
                <li>Refuses to allow J. Wray & Nephew Limited (under the Campari brand) to use their name and likeness in advertising and public relations campaigns relating to the Competition.</li>
              </ul>
            </section>

            {/* Section 11: Entrant's Agreement */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">11. Entrant's Agreement</h2>
              <p className="mb-3">By entering this Promotion, entrants:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accept and agree to the full terms, conditions, and rules of this Promotion.</li>
                <li>Agree to be featured in subsequent advertising (print, voice, or digital) as it relates to this Competition.</li>
                <li>Consent to J. Wray & Nephew Limited's collection, use, and disclosure of their personal information as described herein.</li>
                <li>Allow J. Wray & Nephew Limited to use their name and likeness in advertising and public relations campaigns relating to the Competition.</li>
                <li>Agree to their information being used by J. Wray & Nephew Limited (JWN) or JWN representatives to contact them about this Competition for the period of this Promotion.</li>
              </ul>
            </section>

            {/* Section 12: General */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">12. General Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Winners will be selected by having their correctly completed entries randomly drawn electronically.</li>
                <li>The Promoter's decision is final and no correspondence will be entered into.</li>
                <li>J. Wray & Nephew Limited will not be responsible for any other costs, such as transportation, and the winner and their guest shall solely be responsible for any other costs that may arise.</li>
                <li>Unclaimed prizes will remain the property of J. Wray & Nephew Limited.</li>
              </ul>
            </section>

            {/* Section 13: Authorization */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">13. Authorization</h2>
              <p>
                This promotion is authorized under <strong>Section 58 (3) of the Betting, Gaming and Lotteries Act</strong>.
              </p>
            </section>

            {/* Section 14: Promoter */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">14. Promoter</h2>
              <p>
                <strong>J. Wray & Nephew Limited</strong><br />
                (A member of the Campari Group)
              </p>
            </section>

            {/* Section 15: Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">15. Contact Information</h2>
              <div className="bg-white/10 rounded-lg p-4">
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
