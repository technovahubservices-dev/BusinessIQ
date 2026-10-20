import type { FC } from 'react'

interface RoadmapStepData {
  num: string
  stepLabel: string
  badgeClass: string
  circleClassName: string
  wrapperClassName: string
  contentClassName: string
  durationClassName: string
  title: string
  desc: string
  durationText: string
}

const steps: RoadmapStepData[] = [
  {
    num: '1',
    stepLabel: 'Step 01',
    badgeClass: 'px-2.5 py-1 rounded bg-secondary-fixed text-secondary font-label-sm text-xs font-bold',
    circleClassName:
      'w-12 h-12 rounded-full bg-secondary-container text-on-secondary flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md z-10',
    wrapperClassName: 'flex flex-col md:flex-row items-center gap-6',
    contentClassName: 'w-full md:w-1/2 md:text-right pr-0 md:pr-8',
    durationClassName: 'w-full md:w-1/2 pl-0 md:pl-8 text-xs text-outline font-medium',
    title: 'Traditional Baseline',
    desc: 'Audit current manual sales, paper ledgers, walk-in customer volume, and cash leakages.',
    durationText: 'Duration: 1-2 Days • Zero investment required',
  },
  {
    num: '2',
    stepLabel: 'Step 02',
    badgeClass: 'px-2.5 py-1 rounded bg-primary-fixed text-primary font-label-sm text-xs font-bold',
    circleClassName:
      'w-12 h-12 rounded-full bg-primary text-on-primary flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md z-10',
    wrapperClassName: 'flex flex-col md:flex-row-reverse items-center gap-6',
    contentClassName: 'w-full md:w-1/2 md:text-left pl-0 md:pl-8',
    durationClassName: 'w-full md:w-1/2 pr-0 md:pr-8 text-right text-xs text-outline font-medium hidden md:block',
    title: 'Digital Identity Creation',
    desc: 'Claim Google Business Profile, setup official WhatsApp Business with catalog & greeting automation.',
    durationText: 'Immediate local search presence',
  },
  {
    num: '3',
    stepLabel: 'Step 03',
    badgeClass: 'px-2.5 py-1 rounded bg-primary-fixed text-primary font-label-sm text-xs font-bold',
    circleClassName:
      'w-12 h-12 rounded-full bg-primary-container text-on-primary flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md z-10',
    wrapperClassName: 'flex flex-col md:flex-row items-center gap-6',
    contentClassName: 'w-full md:w-1/2 md:text-right pr-0 md:pr-8',
    durationClassName: 'w-full md:w-1/2 pl-0 md:pl-8 text-xs text-outline font-medium',
    title: 'Business Website Launch',
    desc: 'Deploy modern high-speed mobile-friendly catalog website displaying products, reviews, and directions.',
    durationText: 'Credibility booster • Always open 24/7',
  },
  {
    num: '4',
    stepLabel: 'Step 04',
    badgeClass: 'px-2.5 py-1 rounded bg-primary-fixed text-primary font-label-sm text-xs font-bold',
    circleClassName:
      'w-12 h-12 rounded-full bg-primary-container text-on-primary flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md z-10',
    wrapperClassName: 'flex flex-col md:flex-row-reverse items-center gap-6',
    contentClassName: 'w-full md:w-1/2 md:text-left pl-0 md:pl-8',
    durationClassName: 'w-full md:w-1/2 pr-0 md:pr-8 text-right text-xs text-outline font-medium hidden md:block',
    title: 'Digital Promotion',
    desc: 'Run geo-fenced local ads within 5 km targeting ready-to-buy shoppers with special seasonal launch deals.',
    durationText: 'Attract 2,000+ new views/week',
  },
  {
    num: '5',
    stepLabel: 'Step 05',
    badgeClass: 'px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-bold',
    circleClassName:
      'w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md z-10',
    wrapperClassName: 'flex flex-col md:flex-row items-center gap-6',
    contentClassName: 'w-full md:w-1/2 md:text-right pr-0 md:pr-8',
    durationClassName: 'w-full md:w-1/2 pl-0 md:pl-8 text-xs text-outline font-medium',
    title: 'Organized Cloud Operations',
    desc: 'Integrate POS software with real-time barcode scanning, online-offline inventory sync, and digital billing.',
    durationText: 'Eliminate paper counting & bill errors',
  },
  {
    num: '6',
    stepLabel: 'Step 06',
    badgeClass: 'px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-bold',
    circleClassName:
      'w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md z-10',
    wrapperClassName: 'flex flex-col md:flex-row-reverse items-center gap-6',
    contentClassName: 'w-full md:w-1/2 md:text-left pl-0 md:pl-8',
    durationClassName: 'w-full md:w-1/2 pr-0 md:pr-8 text-right text-xs text-outline font-medium hidden md:block',
    title: 'Analytics & Customer Retention',
    desc: 'Use sales reports to identify top bestselling items. Trigger automated WhatsApp repeat purchase reminders.',
    durationText: 'Double repeat visits from existing customers',
  },
  {
    num: '7',
    stepLabel: 'Step 07',
    badgeClass: 'px-2.5 py-1 rounded bg-tertiary text-on-tertiary font-label-sm text-xs font-bold',
    circleClassName:
      'w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-digital-indigo glow-growth-emerald z-10',
    wrapperClassName: 'flex flex-col md:flex-row items-center gap-6',
    contentClassName: 'w-full md:w-1/2 md:text-right pr-0 md:pr-8',
    durationClassName: 'w-full md:w-1/2 pl-0 md:pl-8 text-xs text-tertiary font-bold',
    title: 'Scale & Multi-Channel Expansion',
    desc: 'Deliver goods across city boundaries, open a second outlet smoothly, and enjoy automated peace of mind.',
    durationText: 'Autonomous Growth Engine Unlocked!',
  },
]

const RoadmapStep: FC<RoadmapStepData> = (s) => (
  <div className={s.wrapperClassName}>
    <div className={s.contentClassName}>
      <span className={s.badgeClass}>{s.stepLabel}</span>
      <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">{s.title}</h3>
      <p className="text-xs text-on-surface-variant mt-1">{s.desc}</p>
    </div>
    <div className={s.circleClassName}>{s.num}</div>
    <div className={s.durationClassName}>{s.durationText}</div>
  </div>
)

const GrowthRoadmap: FC = () => (
  <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-4 py-1.5 rounded-full bg-primary-fixed text-primary font-label-sm text-xs font-bold uppercase tracking-wider inline-block mb-3">
          Clear Playbook
        </span>
        <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface mb-3">
          Step-by-Step Business Growth Roadmap
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant">
          No jargon, no complicated coding. A 7-milestone roadmap designed for any practical shop owner.
        </p>
      </div>

      {/* Roadmap Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical connector line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-secondary via-primary to-tertiary -translate-x-1/2 hidden md:block rounded-full"></div>
        <div className="space-y-8 relative">
          {steps.map((s) => (
            <RoadmapStep key={s.stepLabel} {...s} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default GrowthRoadmap
