import type { FC } from 'react'
import ImpactCard from './ImpactCard'

interface ImpactItem {
  borderClass: string
  iconCircleClass: string
  icon: string
  title: string
  desc: string
  label: string
  value: string
  valueClass: string
}

const items: ImpactItem[] = [
  {
    borderClass: 'border-t-tertiary',
    iconCircleClass: 'bg-tertiary/10 text-tertiary',
    icon: 'public',
    title: '1. Customer Reach',
    desc: 'Break through the physical barrier of your neighborhood. Gain footfalls from every pin code in your district.',
    label: 'Scope',
    value: 'Neighborhood → Pan-India',
    valueClass: 'text-tertiary',
  },
  {
    borderClass: 'border-t-secondary-container',
    iconCircleClass: 'bg-secondary-container/15 text-secondary',
    icon: 'trending_up',
    title: '2. Sales Opportunities',
    desc: 'Transform casual window shoppers into paying buyers through instant digital catalogs and one-click buying links.',
    label: 'Conversion',
    value: 'Walk-in Only → Multi-channel',
    valueClass: 'text-secondary',
  },
  {
    borderClass: 'border-t-primary-container',
    iconCircleClass: 'bg-primary/10 text-primary',
    icon: 'campaign',
    title: '3. Measurable Marketing',
    desc: 'Stop wasting money on lost paper fliers. Target only people who searched for your exact products today.',
    label: 'Precision',
    value: 'Blind Printing → Tracked Clicks',
    valueClass: 'text-primary',
  },
  {
    borderClass: 'border-t-secondary',
    iconCircleClass: 'bg-secondary/10 text-secondary',
    icon: 'dashboard',
    title: '4. Business Management',
    desc: 'All your bills, GST invoices, and vendor records neatly filed in the cloud. Access your business health from anywhere.',
    label: 'Control',
    value: 'Paper Registers → Phone Dashboard',
    valueClass: 'text-secondary',
  },
  {
    borderClass: 'border-t-primary',
    iconCircleClass: 'bg-primary-fixed text-primary',
    icon: 'sentiment_very_satisfied',
    title: '5. Customer Experience',
    desc: 'No waiting in lines, instant WhatsApp receipts, direct order tracking, and seamless contactless payments.',
    label: 'Satisfaction',
    value: 'Long Queues → Instant Digital Ease',
    valueClass: 'text-primary',
  },
  {
    borderClass: 'border-t-tertiary-container',
    iconCircleClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    icon: 'shutter_speed',
    title: '6. Time & Efficiency',
    desc: 'Reclaim up to 15 hours each week. Spend your valuable energy strategizing growth instead of counting coin change.',
    label: 'Reclaimed Time',
    value: '~15 Hours Saved / Week',
    valueClass: 'text-tertiary',
  },
]

const ImpactCards: FC = () => (
  <section className="py-20 bg-surface-container-low/60 border-t border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="px-4 py-1.5 rounded-full bg-primary-fixed text-primary font-label-sm text-xs font-bold uppercase tracking-wider inline-block mb-3">
          Holistic Value Added
        </span>
        <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface mb-3">
          Six Business Impact Dimensions
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant">
          Technology isn't just about computers; it's about making every corner of your business run effortlessly.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ImpactCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
)

export default ImpactCards
