import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

function generateTicketNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `CRP-${timestamp}-${random}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      receiptUrl,
      receiptData,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !country) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate receipt
    if (!receiptData || receiptData.status !== 'valid') {
      return NextResponse.json(
        { error: 'Valid receipt required' },
        { status: 400 }
      )
    }

    // Generate ticket number
    const ticketNumber = generateTicketNumber()

    // Calculate entries based on product size
    let entriesCount = 1
    if (receiptData.productSize) {
      const size = receiptData.productSize.toLowerCase()
      if (size.includes('750') || size.includes('1l') || size.includes('1 l')) {
        entriesCount = 5
      }
    }

    // Insert entry into database
    const { data, error } = await supabase
      .from('entries')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email.toLowerCase(),
        phone,
        country,
        ticket_number: ticketNumber,
        entries_count: entriesCount,
        receipt_url: receiptUrl || null,
        receipt_status: receiptData.status,
        receipt_data: {
          placeOfPurchase: receiptData.placeOfPurchase,
          receiptDate: receiptData.receiptDate,
          receiptNumber: receiptData.receiptNumber,
          productSize: receiptData.productSize,
          pairingItems: receiptData.pairingItems,
        },
        is_winner: false,
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to submit entry' },
        { status: 500 }
      )
    }

    // TODO: Send confirmation email
    // await sendConfirmationEmail({
    //   to: email,
    //   firstName,
    //   ticketNumber,
    //   entriesCount,
    // })

    return NextResponse.json({
      success: true,
      ticketNumber,
      entriesCount,
      entry: data,
    })
  } catch (error) {
    console.error('Error submitting entry:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
