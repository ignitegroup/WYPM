# Campari Red Passion - Enter to Win Platform
## Complete Project Specification for Claude Code

---

## PROJECT OVERVIEW

**Project Name:** Campari Red Passion - Win Your Passion Moment  
**Type:** Promotional Enter-to-Win Campaign Website  
**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Supabase  
**Deployment:** Hostinger Cloud (Node.js)  
**Brand Colors:** Campari Red (#ED1C24), Gold (#D4AF37), Deep Red (#7F1D1D)

---

## PAGES

### 1. Home Page (`/`)
### 2. Privacy Policy (`/privacy-policy`)  
### 3. Terms & Conditions (`/terms-and-conditions`)

---

## PAGE 1: HOME PAGE

### Layout Structure (Top to Bottom)

```
┌─────────────────────────────────────────┐
│              AGE GATE OVERLAY           │
│   (Blocks entire site until verified)   │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│               NAVIGATION                │
│  Logo | Home | Prizes | Enter | FAQ     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│                 HERO                    │
│  Animated banner matching flyer         │
│  - Campari logo                         │
│  - "WIN YOUR PASSION MOMENT"            │
│  - Animated plane, bottles, hearts      │
│  - CTA: "ENTER NOW" button              │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│            PRIZES SECTION               │
│  Grid of 5 prizes with icons            │
│  Draw dates display                     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│          HOW TO ENTER SECTION           │
│  4 steps with icons                     │
│  Entry calculation explanation          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│            ENTRY FORM SECTION           │
│  Personal info + Receipt upload         │
│  Real-time validation                   │
│  Submit to database                     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│          WHATSAPP CTA SECTION           │
│  Alternative entry method               │
│  WhatsApp button: 1 (888) 472-2672      │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│              FAQ SECTION                │
│  Accordion-style Q&A                    │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│           SOCIAL MEDIA LINKS            │
│  Instagram: @camparicaribbean           │
│  Facebook: Campari Caribbean            │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│                FOOTER                   │
│  Links, disclaimer, copyright           │
└─────────────────────────────────────────┘
```

---

## COMPONENT SPECIFICATIONS

### COMPONENT: Age Gate (`components/AgeGate.tsx`)

**Design:** Match campari.com age gate exactly

**Features:**
- Full-screen overlay with blurred background
- Background image: Campari branded (red passion lines pattern)
- Campari logo (white) at top
- "Are you of legal drinking age?" heading

**Country Selection:**
- Dropdown with searchable country list
- Auto-detect country from IP (optional)
- Two groups: "Main" (localized countries) and "Others"
- Countries with search functionality
- Selected country determines date format

**Date of Birth Input:**
- Three separate input fields: DD | MM | YYYY
- Format changes based on country (US = MM/DD/YYYY, Japan = YYYY/MM/DD, others = DD/MM/YYYY)
- Numeric input only with auto-advance
- Validate age is 18+ (or country-specific legal drinking age)

**Remember Me:**
- Checkbox: "Remember my choice"
- If checked, store in localStorage with 30-day expiry

**Submit Button:**
- Disabled until valid DOB entered
- Gold button with "SUBMIT" text
- On success: fade out overlay, reveal site

**Underage Handling:**
- Show error message
- Redirect to responsibility.org after 3 seconds

**Disclaimer Text:**
- "By entering this site you accept terms and conditions"
- Links to T&C and Privacy Policy

**Country Data Structure:**
```typescript
interface Country {
  code: string;           // 'jm', 'us', 'gb'
  name: string;           // 'Jamaica'
  format: 'dd/mm/YYYY' | 'mm/dd/YYYY' | 'YYYY/mm/dd';
  legalAge: number;       // 18, 21, etc.
  isMain?: boolean;       // Featured in "Main" group
}
```

**Main Countries (Featured):**
- Australia, Austria, Belgium, Brazil, Canada, Czech Republic, Denmark, France, Germany, International, Ireland, Italy, Jamaica, Japan, Netherlands, Poland, Spain, Sweden, United Kingdom, United States

---

### COMPONENT: Navigation (`components/Navigation.tsx`)

**Desktop Layout:**
```
[CAMPARI LOGO]                    [Home] [Prizes] [How to Enter] [Enter Now] [FAQ]
```

**Mobile Layout:**
- Hamburger menu icon
- Slide-out drawer from right
- Same links as desktop

**Styling:**
- Fixed/sticky on scroll
- Transparent initially, solid background on scroll
- Gold accent on active/hover states

**Links:**
- Home → `#hero`
- Prizes → `#prizes`
- How to Enter → `#how-to-enter`
- Enter Now → `#entry-form`
- FAQ → `#faq`

---

### COMPONENT: Hero Section (`components/Hero.tsx`)

**Background:**
- Gradient: Campari red (#ED1C24) to deep red (#7F1D1D)
- Subtle texture/pattern overlay

**Animated Elements:**

1. **Floating Hearts** (multiple)
   - Random positions
   - Float up animation with rotation
   - Various sizes and opacity levels

2. **Flying Plane**
   - Enters from bottom-left
   - Flies across screen diagonally
   - Continuous loop animation (20s duration)
   - Contrail effect behind

3. **Campari Bottles** (2-3)
   - Gentle floating animation
   - Parallax effect on mouse move
   - Main bottle centered, smaller ones offset

4. **Carnival Dancer Silhouette**
   - Positioned right side
   - Subtle sway animation
   - Feathered headdress visible

5. **Couple Silhouette**
   - Positioned left side
   - Subtle float animation

**Text Content:**
```
CAMPARI (logo)
RED PASSION (subtitle)

WIN YOUR
PASSION MOMENT!

[Gold Banner: BUY 1 200ML, 750ML OR 1L FOR A CHANCE TO WIN]

[ENTER NOW] (button)

Promotion runs February 1st - March 29th, 2026
```

**CTA Button:**
- Large gold button
- Pulsing glow effect
- Scrolls to entry form on click

---

### COMPONENT: Prizes Section (`components/Prizes.tsx`)

**Section ID:** `#prizes`

**Heading:** "AMAZING PRIZES"

**Prize Cards Grid:** 5 cards, responsive (2 cols mobile, 5 cols desktop)

**Total Winners:** 36 across 4 draws (9 winners per draw)

**Prizes:**
| Prize | Winners/Draw | Total Winners | Value | Description |
|-------|--------------|---------------|-------|-------------|
| Punta Cana Trip | 1 | 4 | - | All-expenses paid trip for 2 to Dominican Republic |
| Sandals Jamaica | 1 | 4 | JMD$600,000 | Four-night double occupancy staycation |
| Bedroom Set | 1 | 4 | JMD$450,000 | Complete bedroom furniture set |
| Xodus Carnival Costume | 3 | 12 | - | Frontline costume (Female) + T-Shirt for 2 |
| 55" Smart TV | 3 | 12 | - | 55-inch Smart Television |

**Prize Card Design:**
- Glass morphism effect
- Icon at top
- Prize tier badge
- Title and description
- Hover: lift effect with glow

**Draw Dates Display:**
```
DRAW SCHEDULE (Non-winning entries carry over to next draw)
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  1st Draw   │  2nd Draw   │  3rd Draw   │  4th Draw   │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Entries     │ Entries     │ Entries     │ Entries     │
│ Close:      │ Close:      │ Close:      │ Close:      │
│ Feb 15      │ Mar 1       │ Mar 15      │ Mar 29      │
│ 11:59pm     │ 11:59pm     │ 11:59pm     │ 11:59pm     │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Draw:       │ Draw:       │ Draw:       │ Draw:       │
│ Feb 16      │ Mar 2       │ Mar 16      │ Mar 30      │
│ 9:00am      │ 9:00am      │ 9:00am      │ 9:00am      │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Announced:  │ Announced:  │ Announced:  │ Announced:  │
│ Feb 17      │ Mar 3       │ Mar 17      │ Mar 31      │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

---

### COMPONENT: How to Enter Section (`components/HowToEnter.tsx`)

**Section ID:** `#how-to-enter`

**Heading:** "HOW TO ENTER"

**Steps:** 4 cards with connector lines

```
Step 1              Step 2              Step 3              Step 4
┌─────────┐        ┌─────────┐        ┌─────────┐        ┌─────────┐
│ 🛒      │───────▶│ 📝      │───────▶│ 📤      │───────▶│ ✅      │
│Purchase │        │Fill Form│        │ Upload  │        │Confirmed│
│ Campari │        │         │        │ Receipt │        │         │
└─────────┘        └─────────┘        └─────────┘        └─────────┘
```

**Step Details:**

1. **Purchase Campari**
   - Icon: Shopping cart
   - "200ml = 1 Entry"
   - "750ml or 1L = 5 Entries"

2. **Complete Entry Form**
   - Icon: Form/document
   - "Fill in your details below or via WhatsApp"

3. **Upload Receipt**
   - Icon: Upload/camera
   - "Take a picture of your receipt as proof of purchase"

4. **Get Confirmed**
   - Icon: Checkmark
   - "Receive your entry confirmation and ticket number"

**Entry Calculation Visual:**
```
┌─────────────────────────────────────────────────┐
│ ENTRY CALCULATION                               │
│                                                 │
│ [200ml]  ████░░░░░░░░░░░  = 1 Entry             │
│          (Max 72 entries per receipt)           │
│                                                 │
│ [750ml]  ████████████████ = 5 Entries           │
│ [1L]     ████████████████ = 5 Entries           │
│          (Max 60 entries per receipt)           │
│                                                 │
│ ⚠️ Each receipt can only be submitted ONCE      │
│    Duplicate receipt numbers will be rejected   │
│                                                 │
│ ✓ Non-winning entries roll over to next draw!   │
└─────────────────────────────────────────────────┘
```

---

### COMPONENT: Entry Form Section (`components/EntryForm.tsx`)

**Section ID:** `#entry-form`

**Heading:** "ENTER NOW"

**Form Layout:** Two columns (stack on mobile)

**Left Column - Personal Information:**

```
┌─────────────────────────────────────┐
│ PERSONAL INFORMATION                │
├─────────────────────────────────────┤
│ First Name *            [________]  │
│ Last Name *             [________]  │
│ Email Address *         [________]  │
│ Phone Number *          [________]  │
│ Country *               [▼ Select]  │
└─────────────────────────────────────┘
```

**Right Column - Receipt Upload:**

```
┌─────────────────────────────────────┐
│ RECEIPT UPLOAD                      │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │     📤 Drag & drop your     │   │
│  │        receipt here         │   │
│  │                             │   │
│  │     or click to browse      │   │
│  │                             │   │
│  │     [📷 Take Photo]         │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  After upload:                      │
│  ┌─────────────────────────────┐   │
│  │ [Receipt Image]         [X] │   │
│  │                             │   │
│  │ Status: [PENDING/VALID]     │   │
│  │ Store: Hi-Lo Food Stores    │   │
│  │ Date: 2026-02-15            │   │
│  │ Size: 750ml                 │   │
│  │ Entries: 5                  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Form Fields:**

| Field | Type | Validation | Required |
|-------|------|------------|----------|
| firstName | text | Min 2 chars | Yes |
| lastName | text | Min 2 chars | Yes |
| email | email | Valid email format | Yes |
| phone | tel | Valid phone format | Yes |
| country | select | From country list | Yes |
| receipt | file | Image only, max 10MB | Yes |
| agreeTerms | checkbox | Must be checked | Yes |

**Country Options (Caribbean focused):**
- Jamaica
- Trinidad & Tobago
- Barbados
- Bahamas
- Cayman Islands
- Turks & Caicos
- Guyana
- Suriname
- St. Lucia
- Grenada
- Antigua & Barbuda
- St. Kitts & Nevis
- Dominica
- St. Vincent & Grenadines
- Other Caribbean

**Terms Checkbox:**
```
☐ I confirm that I am 18 years or older and agree to the 
  Terms & Conditions and Privacy Policy. I consent to 
  receiving promotional communications from Campari.
```

**Submit Button:**
- Full width
- Gold background
- "SUBMIT ENTRY" text
- Disabled until form valid + receipt uploaded
- Loading state with spinner

**Success State:**
```
┌─────────────────────────────────────┐
│            ✅ ENTRY CONFIRMED!       │
│                                     │
│  Thank you for entering the         │
│  Campari Red Passion promotion.     │
│                                     │
│  Your Ticket Number:                │
│  ┌─────────────────────────────┐   │
│  │     CRP-LXYZ123-ABCD        │   │
│  └─────────────────────────────┘   │
│                                     │
│  You have received 5 entries        │
│                                     │
│  A confirmation email has been      │
│  sent to your@email.com             │
│                                     │
│  [Submit Another Entry]             │
└─────────────────────────────────────┘
```

---

### COMPONENT: WhatsApp CTA Section (`components/WhatsAppCTA.tsx`)

**Section Design:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  PREFER TO ENTER VIA WHATSAPP?                         │
│                                                         │
│  Send your receipt and details to our WhatsApp number   │
│  for quick and easy entry!                             │
│                                                         │
│  [💬 1 (888) 472-2672]  ← Large green WhatsApp button   │
│                                                         │
│  Simply send:                                          │
│  • Your full name                                      │
│  • Email address                                       │
│  • Phone number                                        │
│  • Photo of your receipt                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**WhatsApp Button:**
- WhatsApp green (#25D366) background
- WhatsApp icon
- Opens `https://wa.me/18884722672`

---

### COMPONENT: FAQ Section (`components/FAQ.tsx`)

**Section ID:** `#faq`

**Heading:** "FREQUENTLY ASKED QUESTIONS"

**Accordion Style:** Click to expand/collapse

**FAQ Items:**

1. **How do I enter the promotion?**
   > Purchase any Campari 200ml, 750ml, or 1L bottle, complete the entry form on this website or via WhatsApp, and upload a photo of your receipt as proof of purchase.

2. **How many entries do I get per purchase?**
   > Each 200ml bottle gives you 1 entry. Each 750ml or 1L bottle gives you 5 entries into the draw.

3. **Can I enter multiple times?**
   > Yes! You can enter as many times as you like with different valid receipts. Each receipt can only be used once.

4. **What are the draw dates?**
   > There are 4 draws: February 16, 2026 | March 2, 2026 | March 16, 2026 | March 30, 2026

5. **What are the prizes?**
   > Grand Prize: 4-night getaway for 2 to Dominican Republic. Plus: Sandals Jamaica staycation, bedroom set, carnival costumes, and 55" TV.

6. **How will winners be notified?**
   > Winners will be contacted via phone and email. Make sure your contact details are correct when entering.

7. **Who can enter?**
   > The promotion is open to residents of Jamaica and participating Caribbean countries who are 18 years or older.

8. **What if my receipt is rejected?**
   > If your receipt is marked invalid, ensure the image is clear and shows a Campari purchase. You can try uploading again or contact us via WhatsApp for assistance.

9. **When does the promotion end?**
   > The promotion runs from February 1st to March 29th, 2026. All entries must be submitted by 11:59 PM on March 29th.

10. **Where can I purchase Campari?**
    > Campari is available at major supermarkets, liquor stores, and bars across Jamaica and the Caribbean.

---

### COMPONENT: Social Media Section (`components/SocialLinks.tsx`)

**Design:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│           FOLLOW US ON SOCIAL MEDIA                     │
│                                                         │
│           [📷]  [📘]  [💬]                              │
│                                                         │
│           @CAMPARICARIBBEAN                             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Social Links:**
- Instagram: https://instagram.com/camparicaribbean
- Facebook: https://facebook.com/camparicaribbean
- WhatsApp: https://wa.me/18884722672

**Icon Buttons:**
- Circular with white background
- Hover: gold background

---

### COMPONENT: Footer (`components/Footer.tsx`)

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  CAMPARI                     QUICK LINKS        CONNECT         │
│  RED PASSION                 • Terms & Cond.    [IG] [FB] [WA]  │
│                              • Privacy Policy                   │
│  Authorized under Section    • Competition      @CAMPARICARIBBEAN│
│  58 (3) of the Betting,       Rules                             │
│  Gaming and Lotteries Act.   • Contact Us                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Must be 18 years or older to drink. Drink responsibly.         │
│                                                                 │
│  © 2026 Campari. All rights reserved.                          │
│  Promotion runs February 1st - March 29th, 2026                │
│  camparicaribbeanrewards.com                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## PAGE 2: PRIVACY POLICY (`/privacy-policy`)

**Route:** `/privacy-policy`

**Layout:** Navigation + Content + Footer

**Content Structure:**
```
# Privacy Policy

Last Updated: [Date]

## 1. Introduction
Campari Group ("we", "us", "our") respects your privacy...

## 2. Information We Collect
- Personal information (name, email, phone)
- Receipt images
- Device and browser information
- Location data

## 3. How We Use Your Information
- Process competition entries
- Contact winners
- Send promotional communications (with consent)
- Improve our services

## 4. Data Sharing
- Third-party service providers
- Legal requirements
- Campari Group companies

## 5. Data Security
- Encryption
- Secure storage
- Access controls

## 6. Your Rights
- Access your data
- Request deletion
- Opt-out of marketing

## 7. Cookies
- Essential cookies
- Analytics cookies
- Marketing cookies

## 8. Contact Us
[Contact information]

## 9. Changes to This Policy
[Update procedures]
```

---

## PAGE 3: TERMS & CONDITIONS (`/terms-and-conditions`)

**Route:** `/terms-and-conditions`

**Layout:** Navigation + Content + Footer

**Content Structure:**
```
# Terms & Conditions

Campari Red Passion "Win Your Passion Moment" Promotion

## 1. Promoter
J. Wray & Nephew Limited / Campari Group

## 2. Eligibility
- Must be 18 years or older
- Resident of Jamaica or participating Caribbean countries
- Employees of Campari Group excluded

## 3. Promotion Period
February 1, 2026 - March 29, 2026

## 4. How to Enter
- Purchase Campari 200ml, 750ml, or 1L
- Complete entry form online or via WhatsApp
- Upload valid receipt

## 5. Entry Allocation
- 200ml = 1 entry
- 750ml = 5 entries
- 1L = 5 entries

## 6. Prizes
[List all prizes and values]

## 7. Winner Selection
- Random draw on specified dates
- Winners notified within 7 days

## 8. Prize Claim
- Must respond within 14 days
- Valid ID required
- Prizes non-transferable

## 9. Disqualification
- Invalid receipts
- Duplicate entries
- False information

## 10. General
- Promoter's decision is final
- Authorized under Section 58(3) of the Betting, Gaming and Lotteries Act

## 11. Data Protection
[Reference privacy policy]

## 12. Contact
[Contact information]
```

---

## DATABASE SCHEMA (Supabase)

### Table: `entries`

```sql
CREATE TABLE entries (
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
  receipt_status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'valid', 'invalid', 'duplicate'
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
  entry_source TEXT DEFAULT 'web' -- 'web', 'whatsapp'
);

-- Indexes
CREATE INDEX idx_entries_email ON entries(email);
CREATE INDEX idx_entries_phone ON entries(phone);
CREATE INDEX idx_entries_ticket ON entries(ticket_number);
CREATE INDEX idx_entries_status ON entries(receipt_status);
CREATE INDEX idx_entries_created ON entries(created_at);
```

### Table: `receipt_processing_queue`

```sql
CREATE TABLE receipt_processing_queue (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  entry_id UUID REFERENCES entries(id) ON DELETE CASCADE,
  receipt_url TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
  attempts INTEGER DEFAULT 0,
  last_attempt_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  error_message TEXT
);
```

### Database Trigger: Auto-queue receipt for processing

```sql
-- Function to queue receipt for API processing
CREATE OR REPLACE FUNCTION queue_receipt_for_processing()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.receipt_url IS NOT NULL AND NEW.receipt_status = 'pending' THEN
    INSERT INTO receipt_processing_queue (entry_id, receipt_url)
    VALUES (NEW.id, NEW.receipt_url);
    
    -- Update entry status to processing
    UPDATE entries SET receipt_status = 'processing' WHERE id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger on entry insert
CREATE TRIGGER trigger_queue_receipt
AFTER INSERT ON entries
FOR EACH ROW
EXECUTE FUNCTION queue_receipt_for_processing();
```

---

## API ROUTES

### POST `/api/entries`

**Purpose:** Create new entry (instant save to DB)

**Request Body:**
```typescript
{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  receiptFile: File; // Base64 or multipart
  agreeTerms: boolean;
  userAgent?: string;
}
```

**Response:**
```typescript
{
  success: boolean;
  ticketNumber: string;
  entryId: string;
  message: string;
}
```

**Flow:**
1. Validate input
2. Upload receipt to Supabase Storage
3. Generate ticket number
4. Insert entry into database with `receipt_status: 'pending'`
5. Return success immediately (receipt processing happens async via trigger)

---

### POST `/api/process-receipt`

**Purpose:** Called by database trigger/cron to process queued receipts

**Request Body:**
```typescript
{
  entryId: string;
  receiptUrl: string;
}
```

**Flow:**
1. Fetch receipt image from storage
2. Call external Receipt AI API
3. Parse response (valid/invalid/duplicate, extracted data)
4. Update entry with receipt_data and receipt_status
5. Calculate entries_count based on product size
6. Send confirmation email if valid

**Receipt AI API Integration:**
```typescript
// Call your existing receipt AI API
const response = await fetch(RECEIPT_AI_API_URL, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RECEIPT_AI_API_KEY}`,
    'Content-Type': 'multipart/form-data'
  },
  body: formData
});

// Expected response structure
interface ReceiptAPIResponse {
  status: 'valid' | 'invalid' | 'duplicate';
  confidence: number;
  extractedData: {
    storeName: string;
    receiptDate: string;
    receiptNumber: string;
    productName: string;
    productSize: string; // '200ml', '750ml', '1L'
    productPrice: number;
    pairingItems: string[];
    totalAmount: number;
  };
  duplicateOf?: string; // Entry ID if duplicate
  errorMessage?: string;
}
```

---

### GET `/api/entries/[ticketNumber]`

**Purpose:** Check entry status

**Response:**
```typescript
{
  ticketNumber: string;
  status: 'pending' | 'processing' | 'valid' | 'invalid' | 'duplicate';
  entriesCount: number;
  createdAt: string;
  receiptData?: {
    storeName: string;
    receiptDate: string;
    productSize: string;
  };
}
```

---

### POST `/api/webhook/receipt-processed`

**Purpose:** Webhook endpoint for async receipt processing completion

**Request Body:**
```typescript
{
  entryId: string;
  status: 'valid' | 'invalid' | 'duplicate';
  extractedData: object;
}
```

---

## FILE STRUCTURE

```
campari-red-passion/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page
│   ├── privacy-policy/
│   │   └── page.tsx              # Privacy policy page
│   ├── terms-and-conditions/
│   │   └── page.tsx              # Terms page
│   ├── globals.css               # Global styles
│   └── api/
│       ├── entries/
│       │   ├── route.ts          # POST: Create entry
│       │   └── [ticketNumber]/
│       │       └── route.ts      # GET: Check status
│       ├── process-receipt/
│       │   └── route.ts          # POST: Process receipt (internal)
│       └── webhook/
│           └── receipt-processed/
│               └── route.ts      # POST: Webhook for completion
│
├── components/
│   ├── AgeGate.tsx               # Age verification modal
│   ├── Navigation.tsx            # Site header/nav
│   ├── Hero.tsx                  # Animated hero section
│   ├── Prizes.tsx                # Prizes display
│   ├── HowToEnter.tsx            # Steps section
│   ├── EntryForm.tsx             # Main entry form
│   ├── WhatsAppCTA.tsx           # WhatsApp entry section
│   ├── FAQ.tsx                   # FAQ accordion
│   ├── SocialLinks.tsx           # Social media section
│   ├── Footer.tsx                # Site footer
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Checkbox.tsx
│       ├── FileUpload.tsx
│       ├── Accordion.tsx
│       └── LoadingSpinner.tsx
│
├── lib/
│   ├── supabase.ts               # Supabase client
│   ├── countries.ts              # Country data with age gate config
│   ├── validation.ts             # Form validation schemas
│   ├── utils.ts                  # Helper functions
│   └── constants.ts              # App constants
│
├── hooks/
│   ├── useAgeGate.ts             # Age gate state management
│   └── useEntryForm.ts           # Form state management
│
├── types/
│   └── index.ts                  # TypeScript interfaces
│
├── public/
│   ├── images/
│   │   ├── campari-logo-white.svg
│   │   ├── red-passion-bg.jpg
│   │   ├── hero-bg.jpg
│   │   └── prizes/
│   └── fonts/
│
├── .env.example
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ENVIRONMENT VARIABLES

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Receipt AI API
RECEIPT_AI_API_URL=https://your-receipt-api.com/analyze
RECEIPT_AI_API_KEY=your-api-key

# Email (optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@camparicaribbeanrewards.com
SMTP_PASSWORD=your-password

# WhatsApp Business API (optional)
WHATSAPP_API_URL=https://api.whatsapp.com/v1
WHATSAPP_API_TOKEN=your-token
WHATSAPP_PHONE_NUMBER=18884722672

# App
NEXT_PUBLIC_SITE_URL=https://camparicaribbeanrewards.com
```

---

## STYLING GUIDELINES

**Brand Colors:**
```css
:root {
  --campari-red: #ED1C24;
  --campari-dark-red: #B91C1C;
  --campari-deep-red: #7F1D1D;
  --campari-gold: #D4AF37;
  --campari-light-gold: #F5D066;
  --campari-cream: #FFF8E7;
}
```

**Typography:**
- Display/Headings: Cinzel (serif, elegant)
- Body: Montserrat (clean, modern)

**Design Principles:**
- Luxury feel with glass morphism
- Red/gold color scheme
- Generous animations
- Mobile-first responsive
- Accessible (WCAG 2.1 AA)

---

## ANIMATIONS

**Hero Section:**
- Plane: `translateX(-100%) → translateX(150vw)` over 20s, repeat
- Hearts: `translateY(100vh) → translateY(-100px)` with rotation, staggered
- Bottles: `translateY(0) → translateY(-20px)` over 4-6s, ease-in-out
- Parallax: Elements respond to mouse position

**Page Transitions:**
- Fade in on scroll with `IntersectionObserver`
- Staggered children animations

**Micro-interactions:**
- Button hover: scale + glow
- Input focus: border color transition
- Accordion: smooth height transition

---

## TESTING CHECKLIST

- [ ] Age gate blocks underage users
- [ ] Age gate remembers verified users
- [ ] Form validates all fields
- [ ] Receipt upload works (drag/drop + click)
- [ ] Entry saves to database immediately
- [ ] Receipt processing triggers async
- [ ] Confirmation shows ticket number
- [ ] WhatsApp link opens correctly
- [ ] FAQ accordion works
- [ ] All links navigate correctly
- [ ] Mobile responsive
- [ ] Page load < 3 seconds
- [ ] All animations smooth (60fps)

---

## DEPLOYMENT NOTES

**Hostinger Cloud Setup:**
1. Create Node.js application
2. Set Node version to 18+
3. Upload built files or connect GitHub
4. Set environment variables
5. Configure domain/SSL
6. Set startup command: `node .next/standalone/server.js`

**Build Command:**
```bash
npm run build
```

**Output:** `.next/standalone/` directory

---

## FUTURE ENHANCEMENTS

1. Admin dashboard for entry management
2. Winner selection tool
3. Email notification system
4. WhatsApp bot integration
5. Multi-language support
6. A/B testing for entry form
7. Analytics dashboard
