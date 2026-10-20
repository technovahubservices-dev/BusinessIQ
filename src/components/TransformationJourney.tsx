import type { FC } from 'react'

interface JourneyNode {
  icon: string
  stageLabel: string
  badgeClass: string
  circleClassName: string
  wrapperClassName: string
  title: string
  desc: string
}

const nodes: JourneyNode[] = [
  {
    icon: 'store',
    stageLabel: 'Stage 01',
    badgeClass: 'px-2 py-0.5 rounded bg-secondary-container/10 text-secondary text-[11px] font-bold mb-1',
    circleClassName:
      'w-12 h-12 rounded-full bg-secondary-fixed/50 text-secondary flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-110 transition-transform',
    wrapperClassName:
      'group bg-surface-container-lowest p-5 rounded border border-secondary-fixed shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center',
    title: 'Traditional Shop',
    desc: 'Physical counter, offline stock, walk-in reliance.',
  },
  {
    icon: 'web',
    stageLabel: 'Stage 02',
    badgeClass: 'px-2 py-0.5 rounded bg-primary-fixed/40 text-primary text-[11px] font-bold mb-1',
    circleClassName:
      'w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-110 transition-transform',
    wrapperClassName:
      'group bg-surface-container-lowest p-5 rounded border border-outline-variant/40 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center',
    title: 'Business Website',
    desc: 'Professional brand home, catalog, and location map.',
  },
  {
    icon: 'visibility',
    stageLabel: 'Stage 03',
    badgeClass: 'px-2 py-0.5 rounded bg-primary-fixed/40 text-primary text-[11px] font-bold mb-1',
    circleClassName:
      'w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-110 transition-transform',
    wrapperClassName:
      'group bg-surface-container-lowest p-5 rounded border border-outline-variant/40 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center',
    title: 'Online Visibility',
    desc: 'Google My Business, Local SEO, and social presence.',
  },
  {
    icon: 'chat',
    stageLabel: 'Stage 04',
    badgeClass: 'px-2 py-0.5 rounded bg-primary-fixed/40 text-primary text-[11px] font-bold mb-1',
    circleClassName:
      'w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-110 transition-transform',
    wrapperClassName:
      'group bg-surface-container-lowest p-5 rounded border border-outline-variant/40 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center',
    title: 'Customer Enquiries',
    desc: 'Automated WhatsApp chats, calls, and instant quotes.',
  },
  {
    icon: 'auto_mode',
    stageLabel: 'Stage 05',
    badgeClass: 'px-2 py-0.5 rounded bg-tertiary-container/10 text-tertiary text-[11px] font-bold mb-1',
    circleClassName:
      'w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-110 transition-transform',
    wrapperClassName:
      'group bg-surface-container-lowest p-5 rounded border border-tertiary-fixed-dim/60 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center',
    title: 'Automated Sales',
    desc: 'Digital carts, UPI payments, auto-invoicing.',
  },
  {
    icon: 'rocket',
    stageLabel: 'Stage 06',
    badgeClass: 'px-2 py-0.5 rounded bg-tertiary text-on-tertiary text-[11px] font-bold mb-1',
    circleClassName:
      'w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-sm mb-3 glow-growth-emerald',
    wrapperClassName:
      'group bg-surface-container-lowest p-5 rounded border-2 border-tertiary shadow-digital-indigo text-center flex flex-col items-center relative overflow-hidden',
    title: 'Business Scale',
    desc: 'Repeat buyers, multiple locations, 10x customer base.',
  },
]

const TransformNode: FC<JourneyNode> = ({ icon, stageLabel, badgeClass, circleClassName, wrapperClassName, title, desc }) => (
  <div className={wrapperClassName}>
    <div className={circleClassName}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <span className={badgeClass}>{stageLabel}</span>
    <h4 className="font-headline-sm text-sm font-bold text-on-surface">{title}</h4>
    <p className="text-xs text-on-surface-variant mt-2">{desc}</p>
  </div>
)

const TransformationJourney: FC = () => (
  <section className="py-20 bg-background relative overflow-hidden scroll-mt-20" id="transformation-flow">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="px-4 py-1.5 rounded-full bg-primary-fixed text-primary font-label-sm text-xs font-bold uppercase tracking-wider inline-block mb-3">
          Road to Digital Growth
        </span>
        <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface mb-3">
          The Transformation Journey
        </h2>
        <p className="text-body-md font-body-md text-on-surface-variant">
          Follow the 6 progressive stages that turn a locked local shop into a thriving automated business.
        </p>
      </div>

      {/* Flow Container */}
      <div className="relative">
        {/* Connecting Track Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-secondary-container via-primary-container to-tertiary -translate-y-6 z-0 rounded-full"></div>
        {/* 6 Step Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
          {nodes.map((node) => (
            <TransformNode key={node.stageLabel} {...node} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default TransformationJourney
