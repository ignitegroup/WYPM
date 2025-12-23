'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { Upload, X, Check, AlertCircle, Loader2, Camera } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

interface ReceiptData {
  status: 'valid' | 'invalid' | 'duplicate' | 'pending'
  placeOfPurchase?: string
  receiptDate?: string
  receiptNumber?: string
  productSize?: string
  pairingItems?: string[]
  entries?: number
  receiptUrl?: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  agreeTerms: boolean
}

const countries = [
  'Jamaica',
  'Trinidad & Tobago',
  'Barbados',
  'Bahamas',
  'Cayman Islands',
  'Turks & Caicos',
  'Guyana',
  'Suriname',
  'Other Caribbean',
]

export default function EntryForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    agreeTerms: false,
  })
  
  const [receiptFile, setReceiptFile] = useState<File | null>(null)
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null)
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ticketNumber, setTicketNumber] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setReceiptFile(file)
      setReceiptPreview(URL.createObjectURL(file))
      setReceiptData(null)
      
      // Analyze receipt with AI API
      await analyzeReceipt(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  })

  const analyzeReceipt = async (file: File) => {
    setIsAnalyzing(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('receipt', file)

      const response = await fetch('/api/analyze-receipt', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error('Failed to analyze receipt')
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      const result: ReceiptData = {
        status: data.status,
        placeOfPurchase: data.placeOfPurchase,
        receiptDate: data.receiptDate,
        receiptNumber: data.receiptNumber,
        productSize: data.productSize,
        pairingItems: data.pairingItems,
        entries: data.entries,
        receiptUrl: data.receiptUrl,
      }

      setReceiptData(result)

      if (result.status === 'valid') {
        toast.success(`Receipt validated! You'll receive ${result.entries} entries.`)
      } else if (result.status === 'duplicate') {
        toast.error('This receipt has already been used.')
      } else if (result.status === 'invalid') {
        toast.error('Could not validate receipt. Please try a clearer image.')
      }
    } catch (error) {
      console.error('Error analyzing receipt:', error)
      toast.error('Error analyzing receipt. Please try again.')
      setReceiptData({ status: 'invalid' })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const removeReceipt = () => {
    setReceiptFile(null)
    setReceiptPreview(null)
    setReceiptData(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!receiptData || receiptData.status !== 'valid') {
      toast.error('Please upload a valid receipt.')
      return
    }

    if (!formData.agreeTerms) {
      toast.error('Please agree to the terms and conditions.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          receiptUrl: receiptData.receiptUrl,
          receiptData: {
            status: receiptData.status,
            placeOfPurchase: receiptData.placeOfPurchase,
            receiptDate: receiptData.receiptDate,
            receiptNumber: receiptData.receiptNumber,
            productSize: receiptData.productSize,
            pairingItems: receiptData.pairingItems,
          },
        }),
      })

      const result = await response.json()

      if (!response.ok || result.error) {
        throw new Error(result.error || 'Failed to submit entry')
      }

      setTicketNumber(result.ticketNumber)
      setReceiptData(prev => prev ? { ...prev, entries: result.entriesCount } : null)
      setIsSubmitted(true)

      toast.success('Entry submitted successfully!')
    } catch (error) {
      console.error('Error submitting entry:', error)
      toast.error('Error submitting entry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Toaster position="top-center" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Entry Confirmed!
          </h2>
          
          <p className="text-white/70 mb-6">
            Thank you for entering the Campari Red Passion promotion.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <p className="text-white/60 text-sm mb-2">Your Ticket Number</p>
            <p className="text-campari-gold text-3xl font-bold font-mono">
              {ticketNumber}
            </p>
          </div>
          
          <div className="bg-campari-gold/20 rounded-lg p-4 mb-6">
            <p className="text-white">
              You have received <span className="text-campari-gold font-bold text-2xl">{receiptData?.entries}</span> entries
            </p>
          </div>
          
          <p className="text-white/60 text-sm mb-6">
            A confirmation email has been sent to {formData.email}
          </p>
          
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                country: '',
                agreeTerms: false,
              })
              setReceiptFile(null)
              setReceiptPreview(null)
              setReceiptData(null)
            }}
            className="btn-campari text-campari-deepRed"
          >
            Submit Another Entry
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster position="top-center" />
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          ENTER <span className="gold-text">NOW</span>
        </h2>
        <p className="text-white/70 text-lg">
          Fill in your details and upload your receipt
        </p>
      </motion.div>

      <motion.form
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="glass-card p-6 md:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-campari-gold font-semibold text-lg mb-4">
              Personal Information
            </h3>
            
            <div>
              <label className="text-white/80 text-sm mb-1 block">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="input-campari"
                placeholder="Enter your first name"
              />
            </div>
            
            <div>
              <label className="text-white/80 text-sm mb-1 block">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="input-campari"
                placeholder="Enter your last name"
              />
            </div>
            
            <div>
              <label className="text-white/80 text-sm mb-1 block">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-campari"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="text-white/80 text-sm mb-1 block">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="input-campari"
                placeholder="+1 (876) 123-4567"
              />
            </div>
            
            <div>
              <label className="text-white/80 text-sm mb-1 block">Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="input-campari"
              >
                <option value="">Select your country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Receipt Upload */}
          <div>
            <h3 className="text-campari-gold font-semibold text-lg mb-4">
              Receipt Upload
            </h3>
            
            {!receiptPreview ? (
              <div
                {...getRootProps()}
                className={`upload-zone h-64 flex flex-col items-center justify-center ${
                  isDragActive ? 'active' : ''
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 text-white/60 mb-4" />
                <p className="text-white font-medium mb-2">
                  {isDragActive ? 'Drop your receipt here' : 'Drag & drop your receipt'}
                </p>
                <p className="text-white/60 text-sm mb-4">or click to browse</p>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20 transition-colors"
                >
                  <Camera className="w-4 h-4" />
                  Take Photo
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative receipt-preview">
                  <img
                    src={receiptPreview}
                    alt="Receipt preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeReceipt}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                  
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <Loader2 className="w-8 h-8 text-campari-gold animate-spin mx-auto mb-2" />
                        <p className="text-white text-sm">Analyzing receipt...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Receipt Status */}
                <AnimatePresence>
                  {receiptData && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-white/5 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/80 text-sm">Status</span>
                        <span className={`badge-${receiptData.status}`}>
                          {receiptData.status.charAt(0).toUpperCase() + receiptData.status.slice(1)}
                        </span>
                      </div>
                      
                      {receiptData.status === 'valid' && (
                        <>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {receiptData.placeOfPurchase && (
                              <div>
                                <span className="text-white/60 block">Store</span>
                                <span className="text-white">{receiptData.placeOfPurchase}</span>
                              </div>
                            )}
                            {receiptData.receiptDate && (
                              <div>
                                <span className="text-white/60 block">Date</span>
                                <span className="text-white">{receiptData.receiptDate}</span>
                              </div>
                            )}
                            {receiptData.productSize && (
                              <div>
                                <span className="text-white/60 block">Size</span>
                                <span className="text-white">{receiptData.productSize}</span>
                              </div>
                            )}
                            {receiptData.entries && (
                              <div>
                                <span className="text-white/60 block">Entries</span>
                                <span className="text-campari-gold font-bold">{receiptData.entries}</span>
                              </div>
                            )}
                          </div>
                          {receiptData.pairingItems && receiptData.pairingItems.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-white/10">
                              <span className="text-white/60 text-sm block mb-1">Also purchased</span>
                              <div className="flex flex-wrap gap-1">
                                {receiptData.pairingItems.map(item => (
                                  <span key={item} className="text-xs bg-white/10 text-white px-2 py-1 rounded">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      
                      {receiptData.status === 'invalid' && (
                        <div className="flex items-start gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <p>Could not validate this receipt. Please ensure the image is clear and shows a Campari purchase.</p>
                        </div>
                      )}
                      
                      {receiptData.status === 'duplicate' && (
                        <div className="flex items-start gap-2 text-yellow-400 text-sm">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <p>This receipt has already been used for an entry. Each receipt can only be used once.</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <label className="flex items-start gap-3 cursor-pointer mb-6">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mt-1 w-5 h-5 rounded border-white/30 bg-white/10 text-campari-gold focus:ring-campari-gold"
            />
            <span className="text-white/70 text-sm">
              I confirm that I am 18 years or older and agree to the{' '}
              <a href="/terms-and-conditions" className="text-campari-gold hover:underline">Terms & Conditions</a>
              {' '}and{' '}
              <a href="/privacy-policy" className="text-campari-gold hover:underline">Privacy Policy</a>.
              I consent to receiving promotional communications from Campari.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting || !receiptData || receiptData.status !== 'valid'}
            className="btn-campari w-full text-campari-deepRed font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Entry'
            )}
          </button>
        </div>
      </motion.form>
    </div>
  )
}
