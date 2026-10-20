import type { FC, ReactNode } from 'react'

interface KpiCardProps {
  label: string
  growth: string
  beforeValue: string
  afterValue: string
  afterColorClass: string
  children: ReactNode
}

const KpiCard: FC<KpiCardProps> = ({
  label,
  growth,
  beforeValue,
  afterValue,
  afterColorClass,
  children,
}) => (
  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/40 shadow-sm hover:shadow-digital-indigo transition-all">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{label}</span>
      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-extrabold">
        {growth}
      </span>
    </div>
    <div className="flex items-baseline gap-3 mb-4">
      <div>
        <span className="text-xs text-outline block">Before</span>
        <span className="text-lg font-bold text-secondary">{beforeValue}</span>
      </div>
      <span className="material-symbols-outlined text-outline text-base">arrow_forward</span>
      <div>
        <span className="text-xs text-tertiary font-bold block">After Tech</span>
        <span className={`text-kpi-metric font-kpi-metric font-extrabold ${afterColorClass}`}>{afterValue}</span>
      </div>
    </div>
    {children}
  </div>
)

export default KpiCard
