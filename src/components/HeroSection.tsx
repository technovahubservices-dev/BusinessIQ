import type { FC } from 'react'

const HeroSection: FC = () => (
  <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 scroll-mt-20" id="hero">
    {/* Ambient subtle background blur ribbons */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-secondary-fixed/30 via-primary-fixed/40 to-tertiary-fixed/30 blur-3xl -z-10 opacity-70 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-4 border border-outline-variant/40 shadow-sm">
          <span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            insights
          </span>
          <span>EMPOWERING MODERN SMALL &amp; MEDIUM ENTERPRISES</span>
        </div>
        <h1 className="text-headline-lg lg:text-display-hero font-headline-lg lg:font-display-hero text-on-surface tracking-tight mb-6">
          Traditional Business <span className="text-outline">vs</span>{' '}
          <span className="bg-gradient-to-r from-primary via-primary-container to-tertiary bg-clip-text text-transparent">
            Digital Business
          </span>
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover how websites and technology can transform the way you attract customers, manage sales, and grow your
          business.
        </p>
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline-sm text-base font-bold shadow-digital-indigo hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-2"
            href="#before-after"
          >
            <span>Explore the Difference</span>
            <span className="material-symbols-outlined">expand_more</span>
          </a>
          <a
            className="px-8 py-3.5 rounded-full bg-surface-container-lowest text-on-surface border border-outline-variant hover:bg-surface-container font-headline-sm text-base font-bold shadow-sm hover:shadow active:scale-95 transition-all flex items-center gap-2"
            href="#growth-dashboard"
          >
            <span className="material-symbols-outlined text-primary">play_circle</span>
            <span>See Business Growth</span>
          </a>
        </div>
      </div>

      {/* High-impact Split Visual Comparison Visual Layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Floating KPI badge: Left */}
        <div className="hidden lg:flex absolute -top-5 left-10 z-20 items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-secondary/20 shadow-warm-traditional">
          <span className="w-3 h-3 rounded-full bg-secondary animate-ping"></span>
          <span className="font-label-sm text-label-sm font-bold text-secondary">Manual Time Drain: High</span>
        </div>
        {/* Floating KPI badge: Right */}
        <div className="hidden lg:flex absolute -top-5 right-10 z-20 items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-tertiary/20 shadow-digital-indigo glow-growth-emerald">
          <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            trending_up
          </span>
          <span className="font-label-sm text-label-sm font-bold text-tertiary">Reach: +350% Scale</span>
        </div>

        {/* LEFT: Traditional Card (Warm orange/amber/coral) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-surface-container-lowest to-secondary-fixed/20 rounded p-6 lg:p-8 border border-secondary-fixed shadow-warm-traditional relative overflow-hidden">
          <div className="flex items-center justify-between pb-5 border-b border-secondary-fixed-dim/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-secondary-container/20 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">storefront</span>
              </div>
              <div>
                <span className="text-label-sm font-label-sm font-bold text-secondary tracking-wider uppercase">
                  Baseline State
                </span>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">BEFORE TECHNOLOGY</h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-bold">
              Manual Model
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest/80 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mt-0.5">menu_book</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">Paper Ledgers &amp; Registers</p>
                <p className="text-xs text-on-surface-variant">
                  Manual billbooks prone to calculation slips &amp; lost entries.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest/80 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mt-0.5">directions_walk</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">Walk-in Only Foot Traffic</p>
                <p className="text-xs text-on-surface-variant">
                  Revenue strictly relies on who passes by your doorstep.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest/80 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mt-0.5">my_location</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">Restricted 1-2 km Radius</p>
                <p className="text-xs text-on-surface-variant">
                  Customers from across town cannot view or order your goods.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest/80 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mt-0.5">phone_missed</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">Phone Ring Delays &amp; Friction</p>
                <p className="text-xs text-on-surface-variant">
                  Lost customer enquiries when busy at the physical counter.
                </p>
              </div>
            </div>
          </div>
          {/* Bottom Metric */}
          <div className="mt-6 pt-4 border-t border-secondary-fixed/30 flex items-center justify-between text-xs text-on-surface-variant font-medium">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-secondary">schedule</span> Hours: 10 hrs/day fixed
            </span>
            <span className="text-secondary font-bold">Growth Potential: Capped</span>
          </div>
        </div>

        {/* CENTER: Transformation Arrow Banner */}
        <div className="lg:col-span-2 flex flex-col items-center my-4 lg:my-0 relative z-10">
          <div className="w-full lg:w-auto flex flex-col items-center">
            {/* Pulsing Orb */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary-container via-primary-container to-tertiary-fixed rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-primary to-primary-container text-on-primary flex flex-col items-center justify-center shadow-digital-indigo">
                <span className="material-symbols-outlined text-3xl lg:text-4xl">bolt</span>
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="px-3 py-1 rounded-full bg-surface-container-high border border-primary/20 text-primary font-label-sm text-xs font-extrabold tracking-wider uppercase inline-block">
                Powered by Tech
              </span>
              <p className="text-[11px] text-on-surface-variant font-semibold mt-1">Automate &amp; Scale</p>
            </div>
            <div className="hidden lg:flex items-center gap-1 mt-3 text-primary-container">
              <span className="material-symbols-outlined text-base">cloud</span>
              <span className="material-symbols-outlined text-base">code</span>
              <span className="material-symbols-outlined text-base">payments</span>
              <span className="material-symbols-outlined text-base">analytics</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Digital Business (Vibrant indigo/purple/emerald) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-surface-container-lowest to-surface-container-low rounded p-6 lg:p-8 border-2 border-primary-container shadow-digital-indigo relative overflow-hidden">
          <div className="flex items-center justify-between pb-5 border-b border-primary-fixed">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">language</span>
              </div>
              <div>
                <span className="text-label-sm font-label-sm font-bold text-primary tracking-wider uppercase">
                  Future Ready
                </span>
                <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">AFTER TECHNOLOGY</h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-bold glow-growth-emerald">
              Automated Scale
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest border border-primary-fixed shadow-sm">
              <span className="material-symbols-outlined text-primary mt-0.5">shopping_cart_checkout</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">24/7 Web Store &amp; Digital Cart</p>
                <p className="text-xs text-on-surface-variant">
                  Collect sales and enquiries even while you sleep or take weekends.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest border border-primary-fixed shadow-sm">
              <span className="material-symbols-outlined text-tertiary mt-0.5">cloud_done</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">Automated Cloud Bookkeeping</p>
                <p className="text-xs text-on-surface-variant">
                  Real-time inventory sync and tax-ready GST billing in 1 click.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest border border-primary-fixed shadow-sm">
              <span className="material-symbols-outlined text-primary mt-0.5">qr_code_scanner</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">Instant Payments (UPI / Cards)</p>
                <p className="text-xs text-on-surface-variant">
                  Zero credit risks, zero change disputes, money hits bank straight.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded bg-surface-container-lowest border border-primary-fixed shadow-sm">
              <span className="material-symbols-outlined text-tertiary mt-0.5">public</span>
              <div>
                <p className="font-label-lg font-bold text-on-surface">City-Wide &amp; Pan-India Reach</p>
                <p className="text-xs text-on-surface-variant">
                  Reach 10,000+ local buyers through Google Maps and targeted ads.
                </p>
              </div>
            </div>
          </div>
          {/* Bottom Metric */}
          <div className="mt-6 pt-4 border-t border-primary-fixed flex items-center justify-between text-xs text-on-surface-variant font-medium">
            <span className="flex items-center gap-1 text-tertiary font-bold">
              <span className="material-symbols-outlined text-sm">schedule</span> Hours: 24/7 Non-stop
            </span>
            <span className="text-tertiary font-bold">+350% Customer Reach</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
