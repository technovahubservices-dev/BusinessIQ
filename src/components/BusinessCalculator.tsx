import type { FC } from 'react'
import { useState } from 'react'

const formatCurrency = (num: number) => `₹${Math.round(num).toLocaleString('en-IN')}`

type Level = 1 | 2 | 3
const multipliers: Record<Level, number> = { 1: 1.25, 2: 1.7, 3: 2.3 }

const BusinessCalculator: FC = () => {
  const [rev, setRev] = useState(50000)
  const [cust, setCust] = useState(120)
  const [aov, setAov] = useState(416)
  const [level, setLevel] = useState<Level>(1)

  const multiplier = multipliers[level]
  const pctGain = Math.round((multiplier - 1) * 100)

  const newRev = rev * multiplier
  const revDelta = newRev - rev
  const newCust = Math.round(cust * multiplier)
  const custDelta = newCust - cust
  const annualGain = revDelta * 12

  const levels = [
    { value: 1 as Level, label: 'Level 1: Basic', sub: '+25% Lift' },
    { value: 2 as Level, label: 'Level 2: Full Web', sub: '+70% Lift' },
    { value: 3 as Level, label: 'Level 3: Scale', sub: '+130% Lift' },
  ]

  const isLevelActive = (v: Level) => level === v

  return (
    <section className="py-20 bg-background scroll-mt-20" id="calculator">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Live Simulation
          </span>
          <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface mb-3">
            Interactive Live Business Comparison Calculator
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Input your current baseline values and test simulated growth projections after digitization.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-surface-container-lowest p-8 lg:p-10 rounded-lg border border-outline-variant/40 shadow-digital-indigo">
          {/* Left: Sliders / Inputs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">tune</span>
              <span>Adjust Your Current Numbers</span>
            </h3>

            {/* Input 1: Monthly Revenue */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="input-rev">
                  Current Monthly Revenue (₹)
                </label>
                <span className="font-bold text-primary font-headline-sm text-base" id="display-rev-val">
                  {formatCurrency(rev)}
                </span>
              </div>
              <input
                className="w-full accent-primary h-2 bg-surface-container-high rounded-lg cursor-pointer"
                id="input-rev"
                max={500000}
                min={10000}
                step={5000}
                type="range"
                value={rev}
                onChange={(e) => setRev(Number(e.target.value))}
              />
              <div className="flex justify-between text-[11px] text-outline mt-1 font-medium">
                <span>₹10,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            {/* Input 2: Monthly Customers */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="input-cust">
                  Current Monthly Customers
                </label>
                <span className="font-bold text-primary font-headline-sm text-base" id="display-cust-val">
                  {cust.toLocaleString()} Customers
                </span>
              </div>
              <input
                className="w-full accent-primary h-2 bg-surface-container-high rounded-lg cursor-pointer"
                id="input-cust"
                max={1500}
                min={20}
                step={10}
                type="range"
                value={cust}
                onChange={(e) => setCust(Number(e.target.value))}
              />
              <div className="flex justify-between text-[11px] text-outline mt-1 font-medium">
                <span>20</span>
                <span>750</span>
                <span>1,500</span>
              </div>
            </div>

            {/* Input 3: Average Order Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="input-aov">
                  Average Order Value (₹)
                </label>
                <span className="font-bold text-primary font-headline-sm text-base" id="display-aov-val">
                  {formatCurrency(aov)}
                </span>
              </div>
              <input
                className="w-full accent-primary h-2 bg-surface-container-high rounded-lg cursor-pointer"
                id="input-aov"
                max={5000}
                min={100}
                step={50}
                type="range"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
              />
              <div className="flex justify-between text-[11px] text-outline mt-1 font-medium">
                <span>₹100</span>
                <span>₹2,500</span>
                <span>₹5,000</span>
              </div>
            </div>

            {/* Input 4: Tech Adoption Level */}
            <div>
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-2">
                Target Digitization Level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {levels.map((lvl) => (
                  <button
                    key={lvl.value}
                    type="button"
                    onClick={() => setLevel(lvl.value)}
                    className={`adoption-btn p-3 rounded font-label-lg text-xs font-bold text-center transition-all flex flex-col ${
                      isLevelActive(lvl.value)
                        ? 'border border-primary bg-primary text-on-primary'
                        : 'border border-outline-variant bg-surface-container-low text-on-surface'
                    }`}
                  >
                    {lvl.label}
                    <br />
                    <span className="text-[10px] opacity-80">{lvl.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Real-time Delta Results (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-surface-container-low to-primary-fixed/20 p-6 lg:p-8 rounded border border-primary/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-primary-fixed">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Simulated Projection</span>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-extrabold">
                  {`+${pctGain}% Potential Lift`}
                </span>
              </div>
              <div className="my-6 space-y-4">
                <div>
                  <span className="text-xs text-on-surface-variant block">Projected Monthly Revenue:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-kpi-metric font-kpi-metric font-extrabold text-on-surface">
                      {formatCurrency(newRev)}
                    </span>
                    <span className="text-sm font-bold text-tertiary">
                      {`(+${formatCurrency(revDelta)} / mo)`}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant block">Projected Monthly Customers:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-headline-md font-bold text-on-surface">
                      {`${newCust.toLocaleString()} Shoppers`}
                    </span>
                    <span className="text-xs font-bold text-tertiary">{`(+${custDelta.toLocaleString()} new)`}</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-outline-variant/30">
                  <span className="text-xs text-on-surface-variant block">Est. Annual Value Unlock:</span>
                  <span className="text-xl font-bold text-primary">{`${formatCurrency(annualGain)} / year`}</span>
                </div>
              </div>
            </div>
            <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/40 text-[11px] text-on-surface-variant">
              <span className="font-bold text-on-surface">Disclaimer:</span> Sample performance comparison model based on
              small enterprise digitization averages. Does not guarantee individual business outcomes.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessCalculator
