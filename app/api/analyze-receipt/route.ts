import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// This route integrates with your existing receipt AI API
// Replace the RECEIPT_AI_API_URL with your actual endpoint

const RECEIPT_AI_API_URL = process.env.RECEIPT_AI_API_URL || 'https://your-receipt-ai-api.com/analyze'
const RECEIPT_AI_API_KEY = process.env.RECEIPT_AI_API_KEY || ''

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const receipt = formData.get('receipt') as File

    if (!receipt) {
      return NextResponse.json(
        { error: 'No receipt file provided' },
        { status: 400 }
      )
    }

    // Upload receipt to Supabase Storage
    const fileName = `receipts/${Date.now()}-${receipt.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('receipts')
      .upload(fileName, receipt)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return NextResponse.json(
        { error: 'Failed to upload receipt' },
        { status: 500 }
      )
    }

    // Get public URL for the uploaded receipt
    const { data: urlData } = supabase.storage
      .from('receipts')
      .getPublicUrl(fileName)

    const receiptUrl = urlData.publicUrl

    // Send to your AI receipt analysis API
    // Uncomment and modify this section to use your actual API
    /*
    const aiFormData = new FormData()
    aiFormData.append('image', receipt)
    aiFormData.append('brand', 'Campari')
    
    const aiResponse = await fetch(RECEIPT_AI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RECEIPT_AI_API_KEY}`,
      },
      body: aiFormData,
    })

    const aiResult = await aiResponse.json()
    
    // Map your AI API response to our format
    const receiptData = {
      status: aiResult.status, // 'valid', 'invalid', 'duplicate'
      placeOfPurchase: aiResult.store_name,
      receiptDate: aiResult.date,
      receiptNumber: aiResult.receipt_number,
      productSize: aiResult.product_size,
      pairingItems: aiResult.other_items || [],
      entries: calculateEntries(aiResult.product_size),
    }
    */

    // For demo purposes, simulate AI response
    // Remove this and use actual API in production
    const receiptData = await simulateAIAnalysis(receipt)

    // Check for duplicate receipt number in database
    if (receiptData.receiptNumber) {
      const { data: existing } = await supabase
        .from('entries')
        .select('id')
        .eq('receipt_data->>receiptNumber', receiptData.receiptNumber)
        .single()

      if (existing) {
        return NextResponse.json({
          ...receiptData,
          status: 'duplicate',
          receiptUrl,
        })
      }
    }

    return NextResponse.json({
      ...receiptData,
      receiptUrl,
    })
  } catch (error) {
    console.error('Error analyzing receipt:', error)
    return NextResponse.json(
      { error: 'Failed to analyze receipt' },
      { status: 500 }
    )
  }
}

// Helper function to calculate entries based on product size
function calculateEntries(productSize: string): number {
  if (!productSize) return 1
  
  const size = productSize.toLowerCase()
  if (size.includes('750') || size.includes('1l') || size.includes('1 l') || size.includes('litre') || size.includes('liter')) {
    return 5
  }
  return 1
}

// Simulated AI analysis for demo - REMOVE IN PRODUCTION
async function simulateAIAnalysis(file: File): Promise<{
  status: 'valid' | 'invalid' | 'duplicate'
  placeOfPurchase?: string
  receiptDate?: string
  receiptNumber?: string
  productSize?: string
  pairingItems?: string[]
  entries: number
}> {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Random simulation for demo
  const stores = ['Hi-Lo Food Stores', 'MegaMart', 'Loshusan Supermarket', 'Progressive Grocers', 'PriceSmart']
  const sizes = ['200ml', '750ml', '1L']
  const pairings = [
    ['Orange Juice', 'Soda Water'],
    ['Tonic Water', 'Lime'],
    ['Grapefruit Juice'],
    ['Soda', 'Ice'],
  ]

  const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
  
  return {
    status: 'valid',
    placeOfPurchase: stores[Math.floor(Math.random() * stores.length)],
    receiptDate: new Date().toISOString().split('T')[0],
    receiptNumber: `RCP-${Date.now().toString().slice(-8)}`,
    productSize: randomSize,
    pairingItems: pairings[Math.floor(Math.random() * pairings.length)],
    entries: calculateEntries(randomSize),
  }
}
