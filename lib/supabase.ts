import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Entry {
  id: string
  created_at: string
  first_name: string
  last_name: string
  email: string
  phone: string
  country: string
  ticket_number: string
  entries_count: number
  receipt_url: string
  receipt_status: 'valid' | 'invalid' | 'duplicate' | 'pending'
  receipt_data: {
    placeOfPurchase?: string
    receiptDate?: string
    receiptNumber?: string
    productSize?: string
    pairingItems?: string[]
  }
  draw_date?: string
  is_winner: boolean
  prize_won?: string
}

export interface Campaign {
  id: string
  name: string
  slug: string
  start_date: string
  end_date: string
  draw_dates: string[]
  prizes: Prize[]
  countries: string[]
  is_active: boolean
}

export interface Prize {
  id: string
  name: string
  description: string
  tier: number
  quantity: number
}
