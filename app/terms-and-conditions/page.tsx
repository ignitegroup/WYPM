import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | Campari Red Passion',
  description: 'Terms and Conditions for Campari Red Passion Win Your Passion Moment promotion',
}

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-campari-gold font-semibold mb-2">
            Campari Red Passion &quot;Win Your Passion Moment&quot; Promotion
          </p>
          <p className="text-white/60 mb-8">Effective: February 1, 2026 - March 29, 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/80">
            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">1. Promoter</h2>
              <p>
                This promotion is organized by J. Wray & Nephew Limited, a member of the Campari Group,
                with registered office at 235 Spanish Town Road, Kingston, Jamaica (&quot;Promoter&quot;).
              </p>
              <p className="mt-4 text-campari-gold font-semibold">
                This promotion is authorized under Section 58(3) of the Betting, Gaming and Lotteries Act.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">2. Eligibility</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Participants must be 18 years of age or older</li>
                <li>Participants must be residents of Jamaica or participating Caribbean countries</li>
                <li>Employees of J. Wray & Nephew Limited, Campari Group, their agencies, and immediate family members are not eligible</li>
                <li>Participants must have legal capacity to enter into contracts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">3. Promotion Period</h2>
              <p>
                The promotion runs from <strong>February 1, 2026, at 12:00 AM</strong> to{' '}
                <strong>March 29, 2026, at 11:59 PM</strong> (Jamaica Time).
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">4. How to Enter</h2>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Purchase any Campari 200ml, 750ml, or 1L bottle from participating retailers</li>
                <li>Visit camparicaribbeanrewards.com or send entry via WhatsApp to 1 (888) 472-2672</li>
                <li>Complete the entry form with your personal details</li>
                <li>Upload a clear photo of your purchase receipt</li>
                <li>Receive confirmation of your entry and ticket number</li>
              </ol>
              <p className="mt-4">
                Each valid receipt can only be submitted once. Duplicate receipt submissions will be rejected.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">5. Entry Allocation</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>200ml bottle:</strong> 1 entry per bottle (maximum 72 entries per receipt)</li>
                <li><strong>750ml bottle:</strong> 5 entries per bottle (maximum 60 entries per receipt)</li>
                <li><strong>1L bottle:</strong> 5 entries per bottle (maximum 60 entries per receipt)</li>
              </ul>
              <p className="mt-4">
                There is no limit to the number of entries a participant can accumulate during the promotion period.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">6. Prizes</h2>
              <p className="mb-4">The following prizes will be awarded across 4 draws (9 winners per draw):</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 text-campari-gold">Prize</th>
                      <th className="text-center py-2 text-campari-gold">Per Draw</th>
                      <th className="text-center py-2 text-campari-gold">Total</th>
                      <th className="text-right py-2 text-campari-gold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-2">4-Night Trip for 2 to Dominican Republic</td>
                      <td className="text-center py-2">1</td>
                      <td className="text-center py-2">4</td>
                      <td className="text-right py-2">All-expenses paid</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Sandals Jamaica 4-Night Staycation</td>
                      <td className="text-center py-2">1</td>
                      <td className="text-center py-2">4</td>
                      <td className="text-right py-2">JMD$600,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Complete Bedroom Set</td>
                      <td className="text-center py-2">1</td>
                      <td className="text-center py-2">4</td>
                      <td className="text-right py-2">JMD$450,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Xodus Carnival Costume Package</td>
                      <td className="text-center py-2">3</td>
                      <td className="text-center py-2">12</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                    <tr>
                      <td className="py-2">55&quot; Smart Television</td>
                      <td className="text-center py-2">3</td>
                      <td className="text-center py-2">12</td>
                      <td className="text-right py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm text-white/60">
                Total: 36 winners across 4 draws
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">7. Draw Schedule</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 text-campari-gold">Draw</th>
                      <th className="text-center py-2 text-campari-gold">Entries Close</th>
                      <th className="text-center py-2 text-campari-gold">Draw Date</th>
                      <th className="text-right py-2 text-campari-gold">Winners Announced</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-2">1st Draw</td>
                      <td className="text-center py-2">Feb 15, 11:59 PM</td>
                      <td className="text-center py-2">Feb 16, 9:00 AM</td>
                      <td className="text-right py-2">Feb 17</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">2nd Draw</td>
                      <td className="text-center py-2">Mar 1, 11:59 PM</td>
                      <td className="text-center py-2">Mar 2, 9:00 AM</td>
                      <td className="text-right py-2">Mar 3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">3rd Draw</td>
                      <td className="text-center py-2">Mar 15, 11:59 PM</td>
                      <td className="text-center py-2">Mar 16, 9:00 AM</td>
                      <td className="text-right py-2">Mar 17</td>
                    </tr>
                    <tr>
                      <td className="py-2">4th Draw</td>
                      <td className="text-center py-2">Mar 29, 11:59 PM</td>
                      <td className="text-center py-2">Mar 30, 9:00 AM</td>
                      <td className="text-right py-2">Mar 31</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                <strong>Important:</strong> Non-winning entries automatically roll over to the next draw.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">8. Winner Selection</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Winners will be selected by random draw from all valid entries received before the draw deadline</li>
                <li>Draws will be conducted using a certified random selection system</li>
                <li>Winners will be notified via phone and email within 7 days of the draw</li>
                <li>Winners must respond to notification within 14 days or forfeit their prize</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">9. Prize Claim</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Winners must present valid government-issued ID to claim prizes</li>
                <li>Prizes are non-transferable and cannot be exchanged for cash</li>
                <li>The Promoter reserves the right to substitute prizes of equal or greater value</li>
                <li>For travel prizes, winners must have valid travel documents (passport, visa if required)</li>
                <li>Prize collection/delivery details will be arranged directly with winners</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">10. Disqualification</h2>
              <p className="mb-4">Entries may be disqualified if:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The receipt is invalid, illegible, or does not show a Campari purchase</li>
                <li>The receipt has been used for a previous entry (duplicate)</li>
                <li>False or misleading information is provided</li>
                <li>The participant does not meet eligibility requirements</li>
                <li>There is evidence of fraud or manipulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">11. Publicity</h2>
              <p>
                By entering, participants agree that their name, photograph, and general location may be
                used for promotional purposes without additional compensation. Winners may be required
                to participate in publicity activities.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">12. Liability</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Promoter is not responsible for lost, late, or incomplete entries</li>
                <li>The Promoter is not liable for any technical failures affecting entry submission</li>
                <li>Participants enter at their own risk and the Promoter will not be liable for any injury or loss arising from participation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">13. Data Protection</h2>
              <p>
                Personal data collected will be processed in accordance with our{' '}
                <Link href="/privacy-policy" className="text-campari-gold hover:underline">
                  Privacy Policy
                </Link>
                . By entering, participants consent to such processing.
              </p>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">14. General</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Promoter&apos;s decision on all matters relating to this promotion is final</li>
                <li>These terms are governed by the laws of Jamaica</li>
                <li>The Promoter reserves the right to amend these terms at any time</li>
                <li>If any provision is found invalid, the remaining provisions remain in effect</li>
              </ul>
            </section>

            <section>
              <h2 className="text-campari-gold text-xl font-semibold mb-4">15. Contact</h2>
              <p className="mb-4">For questions about this promotion, contact us at:</p>
              <ul className="list-none space-y-2">
                <li><strong>Website:</strong> camparicaribbeanrewards.com</li>
                <li><strong>WhatsApp:</strong> 1 (888) 472-2672</li>
                <li><strong>Email:</strong> info@camparicaribbeanrewards.com</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-white/10">
              <p className="text-center text-white/60 text-sm">
                Please drink responsibly. Must be 18 years or older to participate.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
