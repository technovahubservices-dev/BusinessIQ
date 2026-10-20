export interface IndustryPoint {
  label: string
}

export interface IndustrySide {
  headline: string
  points: string[]
}

export interface Industry {
  key: string
  title: string
  icon: string
  tagline: string
  before: IndustrySide
  after: IndustrySide
  tools: string[]
  kpi: string
}

export const industries: Industry[] = [
  {
    key: 'retail',
    title: 'Retail Shop',
    icon: 'storefront',
    tagline: 'General Merchandise & Daily Goods',
    before: {
      headline: 'Physical Counter & Limited Display',
      points: [
        'Shelf space restricts you to displaying only 200 items.',
        "Customers who visit only see what's physically unboxed.",
        'Manual cash reconciliation takes 1 hour every evening.',
      ],
    },
    after: {
      headline: 'Infinite Digital Shelves & Fast POS',
      points: [
        'Unlimited product catalog viewable on customer phones.',
        'Click & Collect or Local Express Delivery in 2 hours.',
        'Automated low-stock alerts before bestselling items run out.',
      ],
    },
    tools: ['Digital Barcode Scanner', 'WhatsApp Catalog', 'Instant UPI Soundbox'],
    kpi: '+65% Catalog Discovery',
  },
  {
    key: 'jewellery',
    title: 'Jewellery Business',
    icon: 'diamond',
    tagline: 'Precious Metals, Ornaments & High-Value Retail',
    before: {
      headline: 'Heavily Dependent on Walk-ins & Trust Calls',
      points: [
        'High security risks with displaying extensive inventory.',
        'Customers hesitate without certified hallmark verification.',
        'Appointments booked manually on paper calendar notebooks.',
      ],
    },
    after: {
      headline: 'High-Resolution Showcase & Pre-Bookings',
      points: [
        '360-degree digital showroom with secure VIP appointments.',
        'Instant digital gold rates sync & automatic hallmark tracking.',
        'WhatsApp reminder notifications for custom wedding orders.',
      ],
    },
    tools: ['Virtual VIP Appointment Suite', 'Live Gold Rate Ticker', 'Digital Hallmarking Ledger'],
    kpi: '+120% High-Value Appointments',
  },
  {
    key: 'clothing',
    title: 'Clothing Boutique',
    icon: 'checkroom',
    tagline: 'Fashion, Apparel & Designer Outlets',
    before: {
      headline: 'Seasonal Deadstock & Fitting Room Queues',
      points: [
        'Unsold seasonal dresses remain stuck in backroom storage.',
        'Sizes and color availability must be manually checked on racks.',
        'Zero record of customer style preferences or past sizing.',
      ],
    },
    after: {
      headline: 'Interactive Lookbook & Size Filtering',
      points: [
        'Direct Instagram shop tagging with one-tap checkout links.',
        'Automated seasonal discount triggers to clear excess stock.',
        'Customer profiles remember dress sizes for instant loyalty gifts.',
      ],
    },
    tools: ['Social Media Checkout', 'Size Matrix Tracker', 'Automated Loyalty Points'],
    kpi: '-40% Dead Inventory',
  },
  {
    key: 'restaurant',
    title: 'Restaurant / Cafe',
    icon: 'restaurant',
    tagline: 'Dine-in, Bakeries, Eateries & Quick-Service',
    before: {
      headline: 'Paper Menus, Table Wait Times & Commission Loss',
      points: [
        'Expensive menu reprints every time food prices or items change.',
        'Paying 25-30% heavy commission fees to external delivery apps.',
        'Frustrated diners waiting 15 minutes just to wave down the bill.',
      ],
    },
    after: {
      headline: 'Contactless QR Ordering & Direct Delivery',
      points: [
        'Scan QR code on table to view photo menu & order instantly.',
        'Direct WhatsApp takeaway ordering with 0% middleman cut.',
        'Automated kitchen display system (KDS) cuts food delays.',
      ],
    },
    tools: ['Table QR Ordering', 'Direct Delivery Engine', 'Automated Kitchen Screen'],
    kpi: '+35% Higher Table Turnover',
  },
  {
    key: 'grocery',
    title: 'Grocery Store (Kirana)',
    icon: 'local_grocery_store',
    tagline: 'Daily Essentials, Fresh Produce & Provisions',
    before: {
      headline: 'Handwritten Paper Slips & Phone Call Chaos',
      points: [
        'Deciphering crumpled handwritten customer grocery lists.',
        'Manual credit book (Khata) tracking with delayed payments.',
        'Younger neighborhood buyers switching to 10-minute delivery apps.',
      ],
    },
    after: {
      headline: '1-Tap Re-order App & WhatsApp Khata',
      points: [
        "Customers click repeat order on their previous week's basket.",
        'Automated friendly WhatsApp payment reminders for credit bills.',
        'Local delivery dispatched in 30 minutes without commission cuts.',
      ],
    },
    tools: ['1-Click Repeat Basket', 'Automated WhatsApp Khata', 'Express Delivery Tracker'],
    kpi: '+45% Daily Order Volume',
  },
  {
    key: 'services',
    title: 'Professional Services',
    icon: 'home_repair_service',
    tagline: 'Consultants, Clinics, Repair & Advisory',
    before: {
      headline: 'Missed Phone Calls & Empty Appointment Slots',
      points: [
        'Losing high-value clients when you are busy serving another.',
        'Double-booking blunders on physical appointment desk diaries.',
        'Chasing unpaid invoices manually across weeks of silence.',
      ],
    },
    after: {
      headline: 'Automated Booking Calendar & Online Retainers',
      points: [
        'Clients book open calendar slots 24/7 with advance deposits.',
        'Automated SMS/Email reminders slash client no-shows by 80%.',
        'Professional GST e-invoices with instant payment buttons.',
      ],
    },
    tools: ['24/7 Self-Booking Link', 'Advance Deposit Gateway', 'Automated No-Show Alerts'],
    kpi: '-80% Client No-Shows',
  },
  {
    key: 'manufacturing',
    title: 'Manufacturing & Small Units',
    icon: 'precision_manufacturing',
    tagline: 'Workshops, Fabrication, Packaging & B2B Parts',
    before: {
      headline: 'Manual Quotation Delays & Whiteboard Dispatch',
      points: [
        'Generating raw material cost estimates takes 3-4 days.',
        'Untracked supplier lead times lead to factory floor idle hours.',
        'Reliance on 2 or 3 local dealers for the entire factory output.',
      ],
    },
    after: {
      headline: 'B2B Digital Inquiries & Live Production Status',
      points: [
        'Instant web RFQ (Request for Quote) portal for bulk corporate buyers.',
        'Cloud tracking of batch cycles and machine maintenance schedules.',
        'Inbound inquiries from industrial buyers across multiple states.',
      ],
    },
    tools: ['Online B2B RFQ Portal', 'Production Batch Tracker', 'Multi-State Freight Calculator'],
    kpi: '+210% Inbound B2B Queries',
  },
  {
    key: 'artisan',
    title: 'Small Local Artisan',
    icon: 'palette',
    tagline: 'Handcrafted Decor, Studio Pottery & Custom Crafts',
    before: {
      headline: 'Restricted to Weekend Flea Markets & Exhibitions',
      points: [
        'Huge booth fees and unsold pieces packed into heavy boxes.',
        'Buyers admire products but have no way to re-order later.',
        'Income fluctuates wildly based on seasonal stall attendance.',
      ],
    },
    after: {
      headline: 'Worldwide Art Store & Pre-Order Drops',
      points: [
        'Launch limited craft editions with countdown timers.',
        'Direct international parcel payments with automated currency conversion.',
        'Tell the story of your handmade process to an engaged global fanbase.',
      ],
    },
    tools: ['Storytelling eCommerce', 'International Currency Gateway', 'Exclusive Drop Timer'],
    kpi: '+300% Direct Margins',
  },
]
