import type { FC } from 'react'
import KpiCard from './KpiCard'

const BarGroup: FC<{
  beforeWidth: string
  beforeBg: string
  afterWidth: string
  afterBg: string
  beforeLabel: string
  afterLabel: string
}> = ({ beforeWidth, beforeBg, afterWidth, afterBg, beforeLabel, afterLabel }) => (
  <div className="space-y-1.5 pt-2 border-t border-outline-variant/20">
    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
      <div className={`h-full ${beforeBg}`} style={{ width: beforeWidth }}></div>
    </div>
    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
      <div className={`h-full ${afterBg}`} style={{ width: afterWidth }}></div>
    </div>
    <div className="flex justify-between text-[11px] text-outline font-medium">
      <span>{beforeLabel}</span>
      <span className="text-primary font-bold">{afterLabel}</span>
    </div>
  </div>
)

const ParagraphNote: FC<{ text: string }> = ({ text }) => (
  <p className="text-xs text-on-surface-variant pt-2 border-t border-outline-variant/20">{text}</p>
)

const BusinessGrowthDashboard: FC = () => (
  <section className="py-20 bg-background scroll-mt-20" id="growth-dashboard">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-sm">query_stats</span>
            <span>Illustrative Sample Example</span>
          </div>
          <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface">
            Business Growth Comparison Dashboard
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-1">
            Representative benchmarks based on small enterprise digitization case metrics.
          </p>
        </div>
        {/* Timeframe / Currency indicators */}
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-surface-container-high text-xs font-bold text-on-surface-variant border border-outline-variant/40">
            Benchmark: 6 Months Post Launch
          </span>
        </div>
      </div>

      {/* KPI Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* KPI 1: Monthly Revenue */}
        <KpiCard
          label="Monthly Revenue"
          growth="+70% Growth"
          beforeValue="₹50,000"
          afterValue="₹85,000"
          afterColorClass="text-on-surface"
        >
          <BarGroup
            beforeWidth="58%"
            beforeBg="bg-secondary-container"
            afterWidth="100%"
            afterBg="bg-gradient-to-r from-primary to-tertiary-fixed-dim"
            beforeLabel="Baseline offline"
            afterLabel="Online + Counter Sales"
          />
        </KpiCard>

        {/* KPI 2: Monthly Customers */}
        <KpiCard
          label="Monthly Customers"
          growth="+183% Surge"
          beforeValue="120 shoppers"
          afterValue="340 shoppers"
          afterColorClass="text-on-surface"
        >
          <BarGroup
            beforeWidth="35%"
            beforeBg="bg-secondary-container"
            afterWidth="100%"
            afterBg="bg-gradient-to-r from-primary to-tertiary-fixed-dim"
            beforeLabel="Foot-traffic only"
            afterLabel="Omnichannel Orders"
          />
        </KpiCard>

        {/* KPI 3: Order Processing Time */}
        <KpiCard
          label="Order Processing Time"
          growth="-82% Friction"
          beforeValue="45 mins"
          afterValue="8 mins"
          afterColorClass="text-tertiary"
        >
          <BarGroup
            beforeWidth="100%"
            beforeBg="bg-secondary-container"
            afterWidth="18%"
            afterBg="bg-tertiary"
            beforeLabel="Manual packing & slips"
            afterLabel="1-Click Auto Dispatch"
          />
        </KpiCard>

        {/* KPI 4: Marketing Reach */}
        <KpiCard
          label="Marketing Reach"
          growth="+2400% Reach"
          beforeValue="~500 people"
          afterValue="12,500"
          afterColorClass="text-on-surface"
        >
          <ParagraphNote text="Expanding from 2 nearby streets into multi-district Google Maps queries and high-intent local social searches." />
        </KpiCard>

        {/* KPI 5: Weekly Bookkeeping */}
        <KpiCard
          label="Weekly Bookkeeping"
          growth="-83% Hours"
          beforeValue="18 hrs/week"
          afterValue="3 hrs/wk"
          afterColorClass="text-tertiary"
        >
          <ParagraphNote text="15 hours reclaimed every single week to spend with family, train staff, or source superior product inventory." />
        </KpiCard>

        {/* KPI 6: Customer Repeat Rate */}
        <KpiCard
          label="Customer Repeat Rate"
          growth="+115% Retention"
          beforeValue="14% return"
          afterValue="30.1%"
          afterColorClass="text-on-surface"
        >
          <ParagraphNote text="Powered by automated broadcast greetings, loyalty points, and reminder alerts when re-stock is necessary." />
        </KpiCard>
      </div>
    </div>
  </section>
)

export default BusinessGrowthDashboard
