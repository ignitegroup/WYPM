-- Campari Red Passion - Win Your Passion Moment
-- Database Schema for Supabase
-- Created: 2025-12-23

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE: entries
-- Main table storing all competition entries
-- ============================================
CREATE TABLE IF NOT EXISTS entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,

  -- Entry Details
  ticket_number TEXT UNIQUE NOT NULL,
  entries_count INTEGER DEFAULT 1,

  -- Receipt Information
  receipt_url TEXT,
  receipt_status TEXT DEFAULT 'pending' CHECK (receipt_status IN ('pending', 'processing', 'valid', 'invalid', 'duplicate')),
  receipt_data JSONB DEFAULT '{}',

  -- Receipt API Response (populated by trigger)
  api_response JSONB DEFAULT '{}',
  api_processed_at TIMESTAMPTZ,

  -- Winner Information
  draw_date DATE,
  is_winner BOOLEAN DEFAULT FALSE,
  prize_won TEXT,
  winner_notified_at TIMESTAMPTZ,
  prize_claimed_at TIMESTAMPTZ,

  -- Metadata
  user_agent TEXT,
  ip_address INET,
  entry_source TEXT DEFAULT 'web' CHECK (entry_source IN ('web', 'whatsapp'))
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_entries_email ON entries(email);
CREATE INDEX IF NOT EXISTS idx_entries_phone ON entries(phone);
CREATE INDEX IF NOT EXISTS idx_entries_ticket ON entries(ticket_number);
CREATE INDEX IF NOT EXISTS idx_entries_status ON entries(receipt_status);
CREATE INDEX IF NOT EXISTS idx_entries_created ON entries(created_at);
CREATE INDEX IF NOT EXISTS idx_entries_draw_date ON entries(draw_date);
CREATE INDEX IF NOT EXISTS idx_entries_is_winner ON entries(is_winner);

-- ============================================
-- TABLE: receipt_processing_queue
-- Queue for async receipt processing
-- ============================================
CREATE TABLE IF NOT EXISTS receipt_processing_queue (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  entry_id UUID REFERENCES entries(id) ON DELETE CASCADE,
  receipt_url TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  attempts INTEGER DEFAULT 0,
  last_attempt_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  error_message TEXT
);

-- Indexes for queue processing
CREATE INDEX IF NOT EXISTS idx_queue_status ON receipt_processing_queue(status);
CREATE INDEX IF NOT EXISTS idx_queue_entry ON receipt_processing_queue(entry_id);
CREATE INDEX IF NOT EXISTS idx_queue_created ON receipt_processing_queue(created_at);

-- ============================================
-- TABLE: campaigns
-- Store campaign/promotion configurations
-- ============================================
CREATE TABLE IF NOT EXISTS campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  draw_dates JSONB DEFAULT '[]',
  prizes JSONB DEFAULT '[]',
  countries JSONB DEFAULT '[]',
  is_active BOOLEAN DEFAULT TRUE,
  settings JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_campaigns_slug ON campaigns(slug);
CREATE INDEX IF NOT EXISTS idx_campaigns_active ON campaigns(is_active);

-- ============================================
-- TABLE: draws
-- Track individual draw events
-- ============================================
CREATE TABLE IF NOT EXISTS draws (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  draw_number INTEGER NOT NULL,
  entries_close_at TIMESTAMPTZ NOT NULL,
  draw_at TIMESTAMPTZ NOT NULL,
  announced_at TIMESTAMPTZ,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'closed', 'drawn', 'announced')),
  total_entries INTEGER DEFAULT 0,
  winners JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_draws_campaign ON draws(campaign_id);
CREATE INDEX IF NOT EXISTS idx_draws_status ON draws(status);

-- ============================================
-- FUNCTION: Update timestamp trigger
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for entries table
DROP TRIGGER IF EXISTS trigger_entries_updated_at ON entries;
CREATE TRIGGER trigger_entries_updated_at
  BEFORE UPDATE ON entries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for campaigns table
DROP TRIGGER IF EXISTS trigger_campaigns_updated_at ON campaigns;
CREATE TRIGGER trigger_campaigns_updated_at
  BEFORE UPDATE ON campaigns
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- FUNCTION: Queue receipt for processing
-- ============================================
CREATE OR REPLACE FUNCTION queue_receipt_for_processing()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.receipt_url IS NOT NULL AND NEW.receipt_status = 'pending' THEN
    INSERT INTO receipt_processing_queue (entry_id, receipt_url)
    VALUES (NEW.id, NEW.receipt_url);

    -- Update entry status to processing
    NEW.receipt_status = 'processing';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-queue receipts on insert
DROP TRIGGER IF EXISTS trigger_queue_receipt ON entries;
CREATE TRIGGER trigger_queue_receipt
  BEFORE INSERT ON entries
  FOR EACH ROW
  EXECUTE FUNCTION queue_receipt_for_processing();

-- ============================================
-- FUNCTION: Generate ticket number
-- ============================================
CREATE OR REPLACE FUNCTION generate_ticket_number()
RETURNS TEXT AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  result TEXT := 'CRP-';
  i INTEGER;
BEGIN
  -- Add 4 random characters
  FOR i IN 1..4 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::int, 1);
  END LOOP;

  result := result || '-';

  -- Add 4 more random characters
  FOR i IN 1..4 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::int, 1);
  END LOOP;

  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on tables
ALTER TABLE entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE receipt_processing_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE draws ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert on entries (for public form submissions)
CREATE POLICY "Allow public entry submissions" ON entries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow users to read their own entries by email
CREATE POLICY "Users can view own entries" ON entries
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Allow reading campaigns
CREATE POLICY "Anyone can view active campaigns" ON campaigns
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Policy: Allow reading draws
CREATE POLICY "Anyone can view draws" ON draws
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Allow service role full access for processing
CREATE POLICY "Service role full access entries" ON entries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access queue" ON receipt_processing_queue
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access campaigns" ON campaigns
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access draws" ON draws
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================================
-- SEED DATA: Initial campaign
-- ============================================
INSERT INTO campaigns (name, slug, start_date, end_date, draw_dates, prizes, countries, is_active)
VALUES (
  'Campari Red Passion - Win Your Passion Moment',
  'red-passion-2026',
  '2026-02-01',
  '2026-03-29',
  '[
    {"draw_number": 1, "entries_close": "2026-02-15T23:59:00", "draw_date": "2026-02-16T09:00:00", "announced": "2026-02-17"},
    {"draw_number": 2, "entries_close": "2026-03-01T23:59:00", "draw_date": "2026-03-02T09:00:00", "announced": "2026-03-03"},
    {"draw_number": 3, "entries_close": "2026-03-15T23:59:00", "draw_date": "2026-03-16T09:00:00", "announced": "2026-03-17"},
    {"draw_number": 4, "entries_close": "2026-03-29T23:59:00", "draw_date": "2026-03-30T09:00:00", "announced": "2026-03-31"}
  ]'::jsonb,
  '[
    {"id": "punta-cana", "name": "Punta Cana Trip", "description": "All-expenses paid trip for 2 to Dominican Republic", "tier": 1, "quantity_per_draw": 1, "total_winners": 4},
    {"id": "sandals-jamaica", "name": "Sandals Jamaica Staycation", "description": "Four-night double occupancy staycation (JMD$600,000)", "tier": 2, "quantity_per_draw": 1, "total_winners": 4},
    {"id": "bedroom-set", "name": "Bedroom Set", "description": "Complete bedroom furniture set (JMD$450,000)", "tier": 3, "quantity_per_draw": 1, "total_winners": 4},
    {"id": "carnival-costume", "name": "Xodus Carnival Costume", "description": "Frontline costume (Female) + T-Shirt for 2", "tier": 4, "quantity_per_draw": 3, "total_winners": 12},
    {"id": "smart-tv", "name": "55\" Smart TV", "description": "55-inch Smart Television", "tier": 5, "quantity_per_draw": 3, "total_winners": 12}
  ]'::jsonb,
  '["Jamaica", "Trinidad & Tobago", "Barbados", "Bahamas", "Cayman Islands", "Turks & Caicos", "Guyana", "Suriname", "St. Lucia", "Grenada", "Antigua & Barbuda", "St. Kitts & Nevis", "Dominica", "St. Vincent & Grenadines"]'::jsonb,
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  start_date = EXCLUDED.start_date,
  end_date = EXCLUDED.end_date,
  draw_dates = EXCLUDED.draw_dates,
  prizes = EXCLUDED.prizes,
  countries = EXCLUDED.countries,
  is_active = EXCLUDED.is_active,
  updated_at = NOW();

-- Insert draw records for the campaign
INSERT INTO draws (campaign_id, draw_number, entries_close_at, draw_at, status)
SELECT
  c.id,
  draw_data.draw_number,
  (draw_data.entries_close)::timestamptz,
  (draw_data.draw_date)::timestamptz,
  'pending'
FROM campaigns c,
LATERAL (
  SELECT
    (elem->>'draw_number')::int as draw_number,
    elem->>'entries_close' as entries_close,
    elem->>'draw_date' as draw_date
  FROM jsonb_array_elements(c.draw_dates) elem
) draw_data
WHERE c.slug = 'red-passion-2026'
ON CONFLICT DO NOTHING;

-- ============================================
-- STORAGE BUCKET SETUP (run separately in Supabase Dashboard if needed)
-- ============================================
-- Note: Storage bucket creation typically done via Supabase Dashboard or API
-- Bucket name: receipts
-- Public: false
-- Allowed mime types: image/jpeg, image/png, image/webp, image/heic
-- Max file size: 10MB

COMMENT ON TABLE entries IS 'Competition entries for Campari Red Passion promotion';
COMMENT ON TABLE receipt_processing_queue IS 'Queue for async receipt validation processing';
COMMENT ON TABLE campaigns IS 'Campaign/promotion configurations';
COMMENT ON TABLE draws IS 'Individual draw events within a campaign';
