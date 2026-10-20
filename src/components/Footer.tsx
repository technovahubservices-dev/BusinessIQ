import type { FC } from 'react'

const Footer: FC = () => (
  <footer className="bg-surface-container dark:bg-inverse-surface flat no shadows docked full-width bottom mt-auto border-t border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-10 w-full">
      {/* Top Grid: Brand & Pillar Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-primary flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                trending_up
              </span>
            </div>
            <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">
              BusinessIQ
            </span>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant dark:text-outline-variant text-xs">
            Demystifying technological transformation for traditional merchants, family businesses, and ambitious shop
            owners worldwide.
          </p>
        </div>

        {/* Pillar 1: Platform */}
        <div>
          <h4 className="font-label-lg font-bold text-on-surface dark:text-inverse-on-surface text-sm mb-3 uppercase tracking-wider">
            Features
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#before-after"
              >
                Before vs After
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#growth-dashboard"
              >
                Growth Dashboard
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#industry-selector"
              >
                Industry Selector
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#calculator"
              >
                Live Calculator
              </a>
            </li>
          </ul>
        </div>

        {/* Pillar 2: Resources & Method */}
        <div>
          <h4 className="font-label-lg font-bold text-on-surface dark:text-inverse-on-surface text-sm mb-3 uppercase tracking-wider">
            Resources
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#transformation-flow"
              >
                Methodology &amp; Metrics
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#hero"
              >
                Security Architecture
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#hero"
              >
                System Status
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#calculator"
              >
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Pillar 3: Compliance & Privacy */}
        <div>
          <h4 className="font-label-lg font-bold text-on-surface dark:text-inverse-on-surface text-sm mb-3 uppercase tracking-wider">
            Legal &amp; Trust
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#"
              >
                Cookie Preferences
              </a>
            </li>
            <li>
              <a
                className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
                href="#"
              >
                Disclaimer Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance Disclaimer */}
      <div className="pt-6 border-t border-outline-variant/30 text-[11px] text-outline text-center md:text-left leading-relaxed">
        <strong>Important Notice:</strong> All quantitative metrics, growth charts, ROI calculations, and before/after
        comparisons presented on this website are illustrative models designed solely for educational and conceptual
        benchmarking. Individual commercial performance will vary depending upon regional market conditions,
        implementation diligence, operational execution, and competitive environment.
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-on-surface-variant dark:text-outline-variant pt-2 border-t border-outline-variant/20">
        <span>© 2025 BusinessIQ Inc. All rights reserved. Sample metrics illustrative only.</span>
        <div className="flex items-center gap-4 mt-3 md:mt-0 font-label-sm text-label-sm">
          <span>Made for ambitious entrepreneurs</span>
          <span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
          <span>System Healthy</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
