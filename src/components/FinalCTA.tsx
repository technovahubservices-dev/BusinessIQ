import type { FC } from 'react'

const FinalCTA: FC = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary via-primary-container to-secondary p-10 md:p-16 text-center text-on-primary shadow-2xl">
        {/* Ambient decorative shapes */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary-container/30 blur-2xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-on-primary font-label-sm text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
            <span>Your Business Has The Potential To Grow</span>
          </div>
          <h2 className="text-headline-md lg:text-display-hero-mobile font-headline-md lg:font-display-hero-mobile font-extrabold tracking-tight mb-6">
            Start Measuring the Difference Today.
          </h2>
          <p className="text-body-lg font-body-lg text-on-primary/90 max-w-2xl mx-auto mb-10">
            Understand your current performance, explore digital opportunities, and make smarter business decisions using
            real data.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="px-8 py-4 rounded-full bg-surface-container-lowest text-primary font-headline-sm text-base font-bold shadow-lg hover:bg-surface-container-low hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              href="#calculator"
            >
              <span className="material-symbols-outlined">analytics</span>
              <span>Compare My Business</span>
            </a>
            <button
              type="button"
              onClick={() =>
                window.alert('The Complete Business Transformation Guide (PDF) has been simulated for download!')
              }
              className="px-8 py-4 rounded-full bg-white/15 backdrop-blur-md text-on-primary border border-white/30 font-headline-sm text-base font-bold hover:bg-white/25 active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">download</span>
              <span>Download Transformation Guide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FinalCTA
