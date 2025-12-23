# Campari Red Passion - Enter to Win Platform

A modern, animated enter-to-win promotional platform built with Next.js, Tailwind CSS, and Supabase.

![Campari Red Passion](./public/images/og-image.jpg)

## Features

- 🎨 **Animated Hero Section** - Matching the official campaign flyer with floating bottles, hearts, and a flying plane
- 🔞 **Age Verification Gate** - Ensures users are 18+ before accessing the site
- 📸 **AI-Powered Receipt Validation** - Integrates with your receipt AI API to validate purchases
- 🎫 **Entry Management** - Automatic entry calculation (1 for 200ml, 5 for 750ml/1L)
- 📱 **Mobile-First Design** - Fully responsive for all devices
- 💾 **Supabase Backend** - Database, storage, and admin dashboard included

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **File Storage**: Supabase Storage
- **Deployment**: Hostinger Cloud (Node.js)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account (free tier works)
- Your receipt AI API endpoint

### 1. Clone and Install

```bash
git clone https://github.com/your-repo/campari-red-passion.git
cd campari-red-passion
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the following SQL in the SQL Editor:

```sql
-- Create entries table
CREATE TABLE entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  ticket_number TEXT UNIQUE NOT NULL,
  entries_count INTEGER DEFAULT 1,
  receipt_url TEXT,
  receipt_status TEXT DEFAULT 'pending',
  receipt_data JSONB,
  draw_date DATE,
  is_winner BOOLEAN DEFAULT FALSE,
  prize_won TEXT
);

-- Create index for faster queries
CREATE INDEX idx_entries_email ON entries(email);
CREATE INDEX idx_entries_ticket ON entries(ticket_number);
CREATE INDEX idx_entries_draw_date ON entries(draw_date);

-- Create storage bucket for receipts
INSERT INTO storage.buckets (id, name, public) 
VALUES ('receipts', 'receipts', true);

-- Storage policy for uploads
CREATE POLICY "Allow public uploads" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'receipts');

CREATE POLICY "Allow public reads" ON storage.objects
  FOR SELECT USING (bucket_id = 'receipts');
```

3. Copy your project URL and anon key from Settings > API

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
RECEIPT_AI_API_URL=https://your-receipt-api.com/analyze
RECEIPT_AI_API_KEY=your-api-key
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Deployment to Hostinger Cloud

### Option 1: Git Deployment

1. Push your code to GitHub
2. In Hostinger Cloud, create a new Node.js application
3. Connect your GitHub repository
4. Set environment variables in Hostinger
5. Deploy

### Option 2: Manual Deployment

```bash
# Build the application
npm run build

# The output is in .next/standalone
# Upload this folder to Hostinger via FTP/SFTP
```

### Hostinger Configuration

In your Hostinger Cloud panel:

1. Set Node.js version to 18+
2. Set startup command: `node .next/standalone/server.js`
3. Add environment variables
4. Enable SSL

## Integrating Your Receipt AI API

Update `/app/api/analyze-receipt/route.ts`:

```typescript
// Replace the simulated response with your actual API call
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

// Map your API response to our format
const receiptData = {
  status: aiResult.status,
  placeOfPurchase: aiResult.store_name,
  receiptDate: aiResult.date,
  receiptNumber: aiResult.receipt_number,
  productSize: aiResult.product_size,
  pairingItems: aiResult.other_items || [],
  entries: calculateEntries(aiResult.product_size),
}
```

## Customization

### Changing Campaign Details

Edit the following files:

- **Dates/Prizes**: `components/Prizes.tsx` and `components/HowToEnter.tsx`
- **Countries**: `components/EntryForm.tsx` (countries array)
- **Colors**: `tailwind.config.ts` (campari color palette)
- **Branding**: `app/layout.tsx` (metadata) and `components/Hero.tsx`

### Adding New Campaigns

This platform is designed to be cloned for different campaigns:

1. Duplicate the repository
2. Update branding in `tailwind.config.ts`
3. Modify hero section in `components/Hero.tsx`
4. Update prizes and dates
5. Create new Supabase project (or new tables)
6. Deploy to new subdomain

## Admin Dashboard

Supabase provides a built-in admin interface:

1. Go to your Supabase project
2. Navigate to Table Editor > entries
3. View, filter, and export entries
4. Use SQL Editor for complex queries

### Drawing Winners

```sql
-- Select random winner from valid entries for a specific draw date
SELECT * FROM entries 
WHERE receipt_status = 'valid' 
  AND is_winner = FALSE
  AND created_at < '2026-02-16'
ORDER BY RANDOM() 
LIMIT 1;

-- Mark as winner
UPDATE entries 
SET is_winner = TRUE, prize_won = 'Grand Prize - Dominican Republic Trip'
WHERE id = 'winner-uuid';
```

## Project Structure

```
campari-red-passion/
├── app/
│   ├── api/
│   │   ├── analyze-receipt/route.ts
│   │   └── submit-entry/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AgeGate.tsx
│   ├── EntryForm.tsx
│   ├── FloatingHearts.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowToEnter.tsx
│   └── Prizes.tsx
├── lib/
│   └── supabase.ts
├── public/
│   └── images/
├── .env.example
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## License

Proprietary - Campari Group / Ignite Holdings

## Support

For technical support, contact: [your-email@ignite-holdings.com]
