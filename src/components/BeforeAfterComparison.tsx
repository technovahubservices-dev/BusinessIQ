import type { FC } from 'react'
import ComparisonRow from './ComparisonRow'

const rows = [
  {
    number: 1,
    leftIcon: 'person_search',
    leftLabel: 'Customer Discovery',
    leftBadge: 'Street Foot-Traffic',
    leftTitle: 'Only walks-ins passing by the shop notice you.',
    leftDesc: 'If the street is quiet or blocked by construction, sales immediately collapse.',
    rightIcon: 'travel_explore',
    rightLabel: 'Scale Discovery',
    rightBadge: 'Google & Social',
    rightTitle: 'Customers discover you via Google Search, Maps & Instagram.',
    rightDesc: 'Thousands find your products daily while actively looking to buy.',
  },
  {
    number: 2,
    leftIcon: 'timer_off',
    leftLabel: 'Operating Hours',
    leftBadge: '10 AM - 8 PM',
    leftTitle: 'Shutter down = zero income for 14 hours every night.',
    leftDesc: 'Customers working late cannot browse or buy during their free time.',
    rightIcon: 'alarm_on',
    rightLabel: '24/7 Storefront',
    rightBadge: 'Always Open',
    rightTitle: 'Catalog operates 24 hours a day, 365 days a year.',
    rightDesc: 'Accept inquiries, pre-bookings, and orders even while asleep.',
  },
  {
    number: 3,
    leftIcon: 'edit_note',
    leftLabel: 'Inventory Management',
    leftBadge: 'Paper Registers',
    leftTitle: 'Manual notebook tallies, stockouts, and misplaced slips.',
    leftDesc: 'Hours spent counting stock each Sunday; no real-time low-stock alerts.',
    rightIcon: 'sync',
    rightLabel: 'Automated Cloud Sync',
    rightBadge: 'Real-Time Alerts',
    rightTitle: 'Auto-updated digital stock levels across counter & website.',
    rightDesc: 'Instant WhatsApp notifications when items run low; zero dead inventory.',
  },
  {
    number: 4,
    leftIcon: 'newspaper',
    leftLabel: 'Marketing & Visibility',
    leftBadge: 'Pamphlets & Banners',
    leftTitle: 'Expensive paper pamphlets with zero tracking or attribution.',
    leftDesc: 'You print 5,000 flyers but have no clue if even 5 converted into buyers.',
    rightIcon: 'ads_click',
    rightLabel: 'Precision Digital Ads',
    rightBadge: '100% Trackable',
    rightTitle: 'Laser-targeted ads shown only to people eager to buy nearby.',
    rightDesc: 'Know exact return on every ₹1 spent with daily clicks and inquiry counts.',
  },
  {
    number: 5,
    leftIcon: 'contact_phone',
    leftLabel: 'Customer Retention',
    leftBadge: 'Lost Phone Numbers',
    leftTitle: 'Customer walks out the door and is forgotten forever.',
    leftDesc: 'No system to recall past buyers for festivals, birthdays, or new stock arrivals.',
    rightIcon: 'loyalty',
    rightLabel: 'Automated CRM',
    rightBadge: 'WhatsApp Loyalty',
    rightTitle: 'Automated repeat-visit triggers via WhatsApp loyalty messages.',
    rightDesc: 'Send personalized discount coupons on festivals and auto-birthday wishes.',
  },
  {
    number: 6,
    leftIcon: 'pin_drop',
    leftLabel: 'Geographic Reach',
    leftBadge: '2-3 Street Blocks',
    leftTitle: 'Tied strictly to physical neighborhood location.',
    leftDesc: 'Even if you stock the finest goods in the city, buyers 5 km away never know.',
    rightIcon: 'share_location',
    rightLabel: 'City & National Scale',
    rightBadge: 'Pan-India Reach',
    rightTitle: 'Sell across the entire metropolitan area and national pincodes.',
    rightDesc: 'Integrate courier pickups right from your counter for seamless parcel delivery.',
  },
  {
    number: 7,
    leftIcon: 'payments',
    leftLabel: 'Payment & Checkout',
    leftBadge: 'Cash Handling Friction',
    leftTitle: 'Searching for change, cash theft risks, and long checkout queues.',
    leftDesc: 'Manual evening cash tallying takes 45 minutes of tedious mental fatigue.',
    rightIcon: 'contactless',
    rightLabel: 'Instant Smart Settlement',
    rightBadge: 'UPI / Cards / Wallets',
    rightTitle: 'One-second soundbox & screen confirmations straight to your bank.',
    rightDesc: 'Automatic reconciliation ledger eliminates cash counting errors forever.',
  },
]

const BeforeAfterComparison: FC = () => (
  <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/30 scroll-mt-20" id="before-after">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-4 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-xs font-extrabold uppercase tracking-widest inline-block mb-3">
          Side-by-Side Breakdown
        </span>
        <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface mb-4">
          7 Operational Shifts: Traditional vs Digital
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant">
          See the tangible operational contrast across the 7 core pillars of your daily business.
        </p>
      </div>

      {/* Contrast Column Headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="flex items-center gap-3 p-4 rounded bg-secondary-fixed/20 border-l-4 border-secondary text-on-surface">
          <span className="material-symbols-outlined text-secondary text-2xl">warning_amber</span>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-secondary">Traditional Business</h3>
            <p className="text-xs text-on-surface-variant">Manual bottlenecks, time friction, and localized limits</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 rounded bg-primary-fixed/30 border-l-4 border-primary text-on-surface">
          <span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-primary">Digital Business</h3>
            <p className="text-xs text-on-surface-variant">Automated systems, scalable reach, and real-time efficiency</p>
          </div>
        </div>
      </div>

      {/* 7 Comparison Rows */}
      <div className="space-y-4">
        {rows.map((r) => (
          <ComparisonRow key={r.number} {...r} />
        ))}
      </div>

      {/* Footnote reminder */}
      <div className="mt-8 text-center">
        <p className="text-xs text-outline font-medium italic">
          * Illustrative potential improvements based on implementation of standard business technology tools.
        </p>
      </div>
    </div>
  </section>
)

export default BeforeAfterComparison
