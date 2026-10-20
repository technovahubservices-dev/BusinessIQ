import type { FC } from 'react'

const Navbar: FC = () => (
  <header className="bg-surface/90 dark:bg-surface/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(79,70,229,0.08)] shadow-sm docked full-width top-0 sticky z-50">
    <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between w-full">
      {/* Brand Logo */}
      <a className="flex items-center gap-3 group" href="#hero">
        <div className="w-10 h-10 rounded bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-md group-hover:scale-105 transition-transform duration-200">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            trending_up
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-headline-sm font-headline-sm font-extrabold text-on-surface dark:text-inverse-on-surface tracking-tight">
            BusinessIQ
          </span>
          <span className="text-[10px] tracking-widest uppercase font-bold text-primary -mt-1">
            Growth Intelligence
          </span>
        </div>
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          className="text-primary dark:text-inverse-primary font-bold border-b-2 border-primary dark:border-inverse-primary pb-1 font-label-lg text-label-lg active:scale-95 transition-transform duration-150"
          href="#hero"
        >
          Home
        </a>
        <a
          className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 font-label-lg text-label-lg active:scale-95"
          href="#before-after"
        >
          Before vs After
        </a>
        <a
          className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 font-label-lg text-label-lg active:scale-95"
          href="#growth-dashboard"
        >
          Business Growth
        </a>
        <a
          className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 font-label-lg text-label-lg active:scale-95"
          href="#calculator"
        >
          Compare Metrics
        </a>
        <a
          className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 font-label-lg text-label-lg active:scale-95"
          href="#industry-selector"
        >
          Business Types
        </a>
        <a
          className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200 font-label-lg text-label-lg active:scale-95"
          href="#transformation-flow"
        >
          About
        </a>
      </nav>

      {/* Trailing Primary Action and Trailing Icon */}
      <div className="flex items-center gap-3">
        <button
          className="hidden lg:flex items-center justify-center p-2 rounded-full text-primary hover:bg-surface-container transition-colors duration-200"
          title="Smart Features"
          type="button"
        >
          <span className="material-symbols-outlined text-2xl">auto_awesome</span>
        </button>
        <a
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline-sm text-sm font-bold shadow-digital-indigo hover:translate-y-[-1px] hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center gap-2"
          href="#calculator"
        >
          <span>Start Comparing</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
    </div>
  </header>
)

export default Navbar
