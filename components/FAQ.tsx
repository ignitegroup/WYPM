'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do I enter the promotion?',
    answer:
      'Purchase any Campari 200ml, 750ml, or 1L bottle, complete the entry form on this website or via WhatsApp, and upload a photo of your receipt as proof of purchase.',
  },
  {
    question: 'How many entries do I get per purchase?',
    answer:
      'Each 200ml bottle gives you 1 entry. Each 750ml or 1L bottle gives you 5 entries into the draw.',
  },
  {
    question: 'Can I enter multiple times?',
    answer:
      'Yes! You can enter as many times as you like with different valid receipts. Each receipt can only be used once.',
  },
  {
    question: 'What are the draw dates?',
    answer:
      'There are 4 draws: February 16, 2026 | March 2, 2026 | March 16, 2026 | March 30, 2026. Non-winning entries roll over to the next draw!',
  },
  {
    question: 'What are the prizes?',
    answer:
      'Grand Prize: 4-night getaway for 2 to Dominican Republic. Plus: Sandals Jamaica staycation (JMD$600,000 value), complete bedroom set (JMD$450,000 value), Xodus carnival costumes, and 55" Smart TVs.',
  },
  {
    question: 'How will winners be notified?',
    answer:
      'Winners will be contacted via phone and email within 7 days of the draw. Make sure your contact details are correct when entering.',
  },
  {
    question: 'Who can enter?',
    answer:
      'The promotion is open to residents of Jamaica and participating Caribbean countries who are 18 years or older.',
  },
  {
    question: 'What if my receipt is rejected?',
    answer:
      'If your receipt is marked invalid, ensure the image is clear and shows a Campari purchase. You can try uploading again or contact us via WhatsApp for assistance.',
  },
  {
    question: 'When does the promotion end?',
    answer:
      'The promotion runs from February 1st to March 29th, 2026. All entries must be submitted by 11:59 PM on March 29th.',
  },
  {
    question: 'Where can I purchase Campari?',
    answer:
      'Campari is available at major supermarkets, liquor stores, and bars across Jamaica and the Caribbean.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          FREQUENTLY ASKED <span className="gold-text">QUESTIONS</span>
        </h2>
        <p className="text-white/70 text-lg">
          Everything you need to know about the promotion
        </p>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="text-white font-medium pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-campari-gold" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
