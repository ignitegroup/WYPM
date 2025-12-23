// lib/campaign-config.ts
// Campaign configuration based on official Terms & Conditions

export const campaignConfig = {
  name: 'Campari Win Your Red Passion Moment',
  promoter: 'J. Wray & Nephew Limited',
  website: 'www.camparicaribbeanrewards.com',
  whatsapp: '18884722672',
  whatsappDisplay: '1 (888) 472-2672',
  socialMedia: {
    instagram: '@camparicaribbean',
    instagramUrl: 'https://instagram.com/camparicaribbean',
  },
  
  // Promotion Period
  startDate: '2026-02-01',
  endDate: '2026-03-29',
  finalEntryDeadline: '2026-03-29T23:59:00',
  
  // Eligibility
  eligibility: {
    minimumAge: 18,
    residency: 'Jamaica',
    excludedGroups: [
      'Employees of J. Wray & Nephew Limited',
      'Employees of Campari Group',
      'Employees of affiliated agencies',
      'Immediate family members of the above',
    ],
  },
  
  // Entry Allocation
  entryRules: {
    '200ml': {
      entries: 1,
      maxPerReceipt: 72,
    },
    '750ml': {
      entries: 5,
      maxPerReceipt: 60,
    },
    '1L': {
      entries: 5,
      maxPerReceipt: 60,
    },
  },
  
  // Draw Schedule
  draws: [
    {
      drawNumber: 1,
      closeOfEntries: '2026-02-15T23:59:00',
      drawDate: '2026-02-16T09:00:00',
      announcementDate: '2026-02-17',
      claimDeadline: '2026-02-27',
    },
    {
      drawNumber: 2,
      closeOfEntries: '2026-03-01T23:59:00',
      drawDate: '2026-03-02T09:00:00',
      announcementDate: '2026-03-03',
      claimDeadline: '2026-03-13',
    },
    {
      drawNumber: 3,
      closeOfEntries: '2026-03-15T23:59:00',
      drawDate: '2026-03-16T09:00:00',
      announcementDate: '2026-03-17',
      claimDeadline: '2026-03-27',
    },
    {
      drawNumber: 4,
      closeOfEntries: '2026-03-29T23:59:00',
      drawDate: '2026-03-30T09:00:00',
      announcementDate: '2026-03-31',
      claimDeadline: '2026-04-10',
    },
  ],
  
  // Prizes (36 total winners across 4 draws = 9 winners per draw)
  prizes: [
    {
      id: 'punta-cana',
      name: 'All-Expenses Paid Trip to Punta Cana',
      description: 'Trip for winner and one (1) guest to Punta Cana, Dominican Republic',
      winnersPerDraw: 1,
      totalWinners: 4,
      tier: 1,
      icon: 'plane',
      redemptionDeadline: '2026-10-31',
      requirements: ['Valid passport', 'Documentation for DR entry'],
    },
    {
      id: 'sandals',
      name: 'Sandals Jamaica Staycation',
      description: 'Four-night double occupancy at a Sandals Resort in Jamaica',
      value: 'JMD$600,000',
      winnersPerDraw: 1,
      totalWinners: 4,
      tier: 2,
      icon: 'hotel',
      redemptionDeadline: '2026-10-31',
      requirements: ['Proof of residence (utility bill)'],
    },
    {
      id: 'bedroom-set',
      name: 'Bedroom Furniture Set',
      description: 'Complete bedroom furniture set',
      value: 'JMD$450,000',
      winnersPerDraw: 1,
      totalWinners: 4,
      tier: 3,
      icon: 'bed',
    },
    {
      id: 'carnival-costume',
      name: 'Xodus Carnival Costume Package',
      description: 'Frontline Xodus Carnival Costume (Female) and T-Shirt Package for winner and one (1) guest',
      winnersPerDraw: 3,
      totalWinners: 12,
      tier: 4,
      icon: 'party',
      redemptionDeadline: '2026-04-10',
    },
    {
      id: 'television',
      name: '55-inch Smart Television',
      description: '55-inch Smart TV',
      winnersPerDraw: 3,
      totalWinners: 12,
      tier: 5,
      icon: 'tv',
    },
  ],
  
  // Selection order per draw
  selectionOrder: [
    'punta-cana',    // 1 winner
    'sandals',       // 1 winner
    'bedroom-set',   // 1 winner
    'carnival-costume', // 3 winners
    'television',    // 3 winners
  ],
  
  // Entry Form Requirements
  requiredFields: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'telephone', label: 'Telephone Number', type: 'tel', required: true },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'receipt', label: 'Receipt Image', type: 'file', required: true },
  ],
  
  // Receipt Requirements
  receiptRequirements: [
    'Name of the supermarket, wholesaler, or trend-leading account',
    'Receipt number',
    'The eligible Campari purchase(s)',
    'Receipt date within promotion period (Feb 1 - Mar 29, 2026)',
  ],
  
  // Winner Contact Rules
  winnerContact: {
    maxAttempts: 2,
    contactHours: {
      start: '10:00',
      end: '17:00',
    },
    backupSelections: 2, // 2nd and 3rd place backups
  },
  
  // Prize Claim Requirements
  claimRequirements: [
    'Valid Jamaican government-issued photo ID (Driver\'s licence, Voters ID, or Passport)',
    'Original or digital copy of the physical receipt',
  ],
  
  // Legal
  legal: {
    authorization: 'Section 58 (3) of the Betting, Gaming and Lotteries Act',
    nonWinningEntriesCarryOver: true, // Non-winning entries re-entered for following draws
    maxPrizesPerPerson: 1,
    prizesNonTransferable: true,
    prizesNonExchangeable: true,
  },
  
  // Draw Location
  drawLocation: {
    company: 'Ignite Holdings Group of Companies Limited',
    address: '57a Old Harbour Rd, Spanish Town, Jamaica',
    method: 'Random Number Generation using Microsoft Excel',
  },
};

// Helper functions
export function getEntryCount(size: string): number {
  const normalizedSize = size.toLowerCase();
  if (normalizedSize.includes('200')) return campaignConfig.entryRules['200ml'].entries;
  if (normalizedSize.includes('750') || normalizedSize.includes('1l') || normalizedSize.includes('1 l')) {
    return campaignConfig.entryRules['750ml'].entries;
  }
  return 1;
}

export function getMaxEntriesPerReceipt(size: string): number {
  const normalizedSize = size.toLowerCase();
  if (normalizedSize.includes('200')) return campaignConfig.entryRules['200ml'].maxPerReceipt;
  return campaignConfig.entryRules['750ml'].maxPerReceipt;
}

export function getCurrentDraw(): typeof campaignConfig.draws[0] | null {
  const now = new Date();
  for (const draw of campaignConfig.draws) {
    if (now <= new Date(draw.closeOfEntries)) {
      return draw;
    }
  }
  return null;
}

export function isPromotionActive(): boolean {
  const now = new Date();
  const start = new Date(campaignConfig.startDate);
  const end = new Date(campaignConfig.finalEntryDeadline);
  return now >= start && now <= end;
}

export function getNextDrawDate(): Date | null {
  const now = new Date();
  for (const draw of campaignConfig.draws) {
    const drawDate = new Date(draw.drawDate);
    if (drawDate > now) {
      return drawDate;
    }
  }
  return null;
}

// FAQ data based on T&C
export const faqData = [
  {
    question: 'How do I enter the promotion?',
    answer: 'Purchase any Campari 200ml, 750ml, or 1L bottle at participating supermarkets, wholesalers, restaurants, or service stations across Jamaica. Then complete the entry form on this website or via WhatsApp at 1 (888) 472-2672, and upload a clear photo of your receipt as proof of purchase.',
  },
  {
    question: 'How many entries do I get per purchase?',
    answer: 'Each 200ml bottle gives you 1 entry. Each 750ml or 1L bottle gives you 5 entries into the draw. The maximum entries per receipt is 72 for 200ml purchases and 60 for 750ml/1L purchases.',
  },
  {
    question: 'Can I enter multiple times?',
    answer: 'Yes! You can enter as many times as you like with different valid receipts. However, each receipt can only be used once - duplicate receipt numbers will be rejected automatically.',
  },
  {
    question: 'What are the draw dates?',
    answer: 'There are 4 draws: February 16, 2026 (entries close Feb 15), March 2, 2026 (entries close Mar 1), March 16, 2026 (entries close Mar 15), and March 30, 2026 (entries close Mar 29). Non-winning entries are automatically re-entered into subsequent draws.',
  },
  {
    question: 'What are the prizes?',
    answer: 'There are 36 total winners across 4 draws: 4 all-expenses paid trips to Punta Cana, Dominican Republic; 4 four-night Sandals Jamaica staycations; 4 bedroom furniture sets (JMD$450,000 value); 12 Xodus Carnival Costume packages; and 12 55-inch Smart TVs.',
  },
  {
    question: 'How will winners be notified?',
    answer: 'Winners will be contacted via phone and email. Up to 2 phone call attempts will be made between 10:00 a.m. and 5:00 p.m. on the draw date. Make sure your contact details are correct when entering!',
  },
  {
    question: 'Who can enter?',
    answer: 'The promotion is open to residents of Jamaica who are 18 years or older at the time of purchase and entry. Employees of J. Wray & Nephew Limited, Campari Group, their affiliates, agencies, and immediate family members are excluded.',
  },
  {
    question: 'What if my receipt is rejected?',
    answer: 'For a receipt to be valid, it must clearly show: the store name, receipt number, and the eligible Campari purchase. The receipt must also be dated within the promotion period (February 1 - March 29, 2026). If your receipt is rejected, ensure the image is clear and shows all required information.',
  },
  {
    question: 'When does the promotion end?',
    answer: 'The promotion runs from February 1st to March 29th, 2026. The final deadline to submit an entry is Sunday, March 29th, 2026 at 11:59 p.m.',
  },
  {
    question: 'How do I claim my prize?',
    answer: 'Winners must present a valid Jamaican government-issued photo ID (Driver\'s licence, Voters ID, or Passport) and the original or digital copy of their receipt. Prizes must be claimed by specific deadlines for each draw, and some prizes have additional redemption deadlines.',
  },
  {
    question: 'Can I win more than one prize?',
    answer: 'No. Entrants are only eligible to win one prize out of the five available and cannot win more than one prize. Prizes are non-transferable and cannot be exchanged for cash.',
  },
  {
    question: 'Where can I purchase Campari?',
    answer: 'Campari is available at participating supermarkets, wholesalers, trend-leading accounts, restaurants, and service stations across Jamaica.',
  },
];
