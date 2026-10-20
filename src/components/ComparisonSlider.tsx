import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

const ComparisonSlider: FC = () => {
  const [percentage, setPercentage] = useState(50)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isSlidingRef = useRef(false)

  const updateSlider = (clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    let offsetX = clientX - rect.left
    if (offsetX < 0) offsetX = 0
    if (offsetX > rect.width) offsetX = rect.width
    const pct = (offsetX / rect.width) * 100
    setPercentage(pct)
  }

  const startSlide = () => {
    isSlidingRef.current = true
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isSlidingRef.current) return
      updateSlider(e.clientX)
    }
    const handleMouseUp = () => {
      isSlidingRef.current = false
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (!isSlidingRef.current) return
      e.preventDefault()
      updateSlider(e.touches[0].clientX)
    }
    const handleTouchEnd = () => {
      isSlidingRef.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <section className="py-20 bg-surface-container-high/30 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-primary-fixed text-primary font-label-sm text-xs font-bold uppercase tracking-wider inline-block mb-3">
            Interactive Reality Slider
          </span>
          <h2 className="text-headline-md lg:text-headline-lg font-headline-md lg:font-headline-lg text-on-surface mb-3">
            Drag to Reveal the Digital Shift
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Slide left and right to peel back the layer between manual paper chaos and streamlined digital automation.
          </p>
        </div>

        {/* Slider Container Frame */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full h-[420px] md:h-[480px] rounded-lg overflow-hidden select-none border-2 border-outline-variant/60 shadow-digital-indigo bg-surface-container-lowest"
            ref={containerRef}
            onClick={(e) => updateSlider(e.clientX)}
          >
            {/* UNDER LAYER: Traditional Chaotic Counter (Warm amber/paper palette) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary-fixed/40 via-surface-container-low to-secondary-fixed/20 p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">history_toggle_off</span>
                  <span>BEFORE: Manual Counter Bottleneck</span>
                </div>
                <span className="text-xs font-semibold text-secondary">Offline Frustration</span>
              </div>
              {/* Chaotic Visual Mock */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
                <div className="p-4 rounded bg-surface-container-lowest/90 border border-secondary/20 shadow-sm">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <span className="material-symbols-outlined">receipt_long</span>
                    <span className="font-bold text-xs">Piles of Paper Slips</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 bg-secondary-fixed rounded"></div>
                    <div className="h-2 w-1/2 bg-secondary-fixed rounded"></div>
                    <div className="h-2 w-5/6 bg-secondary-fixed rounded"></div>
                  </div>
                  <p className="text-[11px] text-on-surface-variant mt-3 italic">
                    "Where did the order #42 receipt go?"
                  </p>
                </div>
                <div className="p-4 rounded bg-surface-container-lowest/90 border border-secondary/20 shadow-sm">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <span className="material-symbols-outlined">hourglass_top</span>
                    <span className="font-bold text-xs">Waiting Line Friction</span>
                  </div>
                  <div className="flex items-center gap-1 text-secondary mt-2">
                    <span className="material-symbols-outlined text-lg">person</span>
                    <span className="material-symbols-outlined text-lg">person</span>
                    <span className="material-symbols-outlined text-lg">person</span>
                    <span className="material-symbols-outlined text-lg">person</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant mt-3">
                    Peak hours bottleneck: customers abandon cart due to wait.
                  </p>
                </div>
                <div className="p-4 rounded bg-surface-container-lowest/90 border border-secondary/20 shadow-sm">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <span className="material-symbols-outlined">calculate</span>
                    <span className="font-bold text-xs">End of Day Calculation</span>
                  </div>
                  <p className="text-2xl font-kpi-metric text-on-surface font-extrabold">2.5 hrs</p>
                  <p className="text-[11px] text-on-surface-variant">
                    spent calculating daily cash & reconciling stock discrepancy.
                  </p>
                </div>
              </div>
              <div className="text-xs text-on-surface-variant flex items-center justify-between border-t border-secondary-fixed pt-3">
                <span>Customer Capacity: Limited to 40/day</span>
                <span className="text-secondary font-bold">Manual Human Bottlenecks</span>
              </div>
            </div>

            {/* TOP LAYER: Modern Digital Glassmorphic Dashboard (Indigo / Emerald) */}
            <div
              className="absolute inset-0 h-full bg-gradient-to-br from-primary-fixed/30 via-surface-container-lowest to-surface-container-high p-8 flex flex-col justify-between overflow-hidden border-r-2 border-primary z-10 backdrop-blur-sm"
              style={{ width: `${percentage}%` }}
            >
              <div className="flex items-center justify-between min-w-[500px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-xs font-bold glow-growth-emerald">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <span>AFTER: 24/7 Digital Hub</span>
                </div>
                <span className="text-xs font-bold text-primary">Automated &amp; Scalable</span>
              </div>
              {/* Digital Visual Mock */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto min-w-[650px]">
                <div className="p-4 rounded bg-surface-container-lowest border border-primary/20 shadow-digital-indigo">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">notifications_active</span> Live Orders
                    </span>
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                  </div>
                  <p className="text-2xl font-kpi-metric font-extrabold text-on-surface">+18 New</p>
                  <p className="text-[11px] text-tertiary font-bold mt-1">Instant soundbox chime &amp; UPI paid</p>
                </div>
                <div className="p-4 rounded bg-surface-container-lowest border border-primary/20 shadow-digital-indigo">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">inventory_2</span> Digital Catalog
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary-fixed text-primary font-bold">Synced</span>
                  </div>
                  <p className="text-2xl font-kpi-metric font-extrabold text-on-surface">1,240</p>
                  <p className="text-[11px] text-on-surface-variant">
                    Products browsable online from any device.
                  </p>
                </div>
                <div className="p-4 rounded bg-surface-container-lowest border border-tertiary-fixed text-on-surface shadow-digital-indigo">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-tertiary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">speed</span> Checkout Speed
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-sm">flash_on</span>
                  </div>
                  <p className="text-2xl font-kpi-metric font-extrabold text-tertiary">8 Secs</p>
                  <p className="text-[11px] text-on-surface-variant">
                    Scan QR, auto-receipt generated via WhatsApp.
                  </p>
                </div>
              </div>
              <div className="text-xs text-on-surface-variant flex items-center justify-between border-t border-primary-fixed pt-3 min-w-[500px]">
                <span className="text-tertiary font-bold">Capacity: Unlimited Online Buyers</span>
                <span className="text-primary font-bold">100% Cloud-Powered Peace of Mind</span>
              </div>
            </div>

            {/* DRAGGABLE SPLIT HANDLE */}
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 flex items-center justify-center cursor-ew-resize z-20 pointer-events-auto"
              style={{ left: `${percentage}%` }}
              onMouseDown={startSlide}
              onTouchStart={startSlide}
            >
              <div className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-primary text-primary flex items-center justify-center slider-handle-halo shadow-2xl hover:scale-110 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-xl">compare_arrows</span>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-on-surface-variant mt-3 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">touch_app</span>
            <span>Click or drag the center handle sideways to scrub between the traditional and digital setups</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSlider
