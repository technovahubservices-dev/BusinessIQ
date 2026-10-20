import type { FC } from 'react'
import { useState } from 'react'
import { industries } from '../data/industries'

const IndustrySelector: FC = () => {
  const [selected, setSelected] = useState('retail')
  const active = industries.find((i) => i.key === selected)

  return (
    <section className="py-20 bg-background scroll-mt-20" id="industry-selector">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-primary-fixed text-primary font-label-sm text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Tailored To Your Trade
          </span>
          <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface mb-3">
            Choose Your Business &amp; See the Difference
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Select your trade below to inspect how digitization directly solves your daily niche bottlenecks.
          </p>
        </div>

        {/* Segmented Industry Pill Selector (8 Business Types) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 max-w-full justify-start lg:justify-center mb-10">
          {industries.map((ind) => (
            <button
              key={ind.key}
              type="button"
              onClick={() => setSelected(ind.key)}
              className={`industry-tab px-5 py-2.5 rounded-full font-label-lg text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                selected === ind.key
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-base">{ind.icon}</span>
              <span>{ind.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Preview Container */}
        <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-lg border border-outline-variant/40 shadow-digital-indigo transition-all duration-300">
          {active && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-outline-variant/30 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">{active.icon}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {active.tagline}
                    </span>
                    <h3 className="text-headline-md font-headline-md font-bold text-on-surface">{active.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-extrabold glow-growth-emerald">
                    {active.kpi}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                {/* Traditional Side */}
                <div className="p-6 rounded bg-secondary-fixed/15 border border-secondary-fixed/60">
                  <div className="flex items-center gap-2 text-secondary font-bold mb-3">
                    <span className="material-symbols-outlined text-lg">cancel</span>
                    <h4 className="font-headline-sm text-base">Traditional Friction</h4>
                  </div>
                  <p className="font-bold text-sm text-on-surface mb-3">{active.before.headline}</p>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    {active.before.points.map((p, i) => (
                      <li className="flex items-start gap-2" key={i}>
                        <span className="material-symbols-outlined text-secondary text-sm mt-0.5">remove</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Digital Side */}
                <div className="p-6 rounded bg-primary-fixed/20 border border-primary/20">
                  <div className="flex items-center gap-2 text-primary font-bold mb-3">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <h4 className="font-headline-sm text-base">Digital Dividend</h4>
                  </div>
                  <p className="font-bold text-sm text-on-surface mb-3">{active.after.headline}</p>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    {active.after.points.map((p, i) => (
                      <li className="flex items-start gap-2" key={i}>
                        <span className="material-symbols-outlined text-tertiary text-sm mt-0.5">check</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Tools */}
              <div className="pt-4 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Recommended Digital Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {active.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-surface-container-high text-xs font-bold text-primary border border-outline-variant/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#calculator"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Calculate {active.title} ROI</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustrySelector
