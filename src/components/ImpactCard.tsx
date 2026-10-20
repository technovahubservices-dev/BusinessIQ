import type { FC } from 'react'

interface ImpactCardProps {
  borderClass: string
  iconCircleClass: string
  icon: string
  title: string
  desc: string
  label: string
  value: string
  valueClass: string
}

const ImpactCard: FC<ImpactCardProps> = ({
  borderClass,
  iconCircleClass,
  icon,
  title,
  desc,
  label,
  value,
  valueClass,
}) => (
  <div
    className={`bg-surface-container-lowest p-6 rounded border-t-4 ${borderClass} border-x border-b border-outline-variant/30 shadow-sm hover:shadow-md transition-all`}
  >
    <div className={`w-12 h-12 rounded ${iconCircleClass} flex items-center justify-center mb-4`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">{title}</h3>
    <p className="text-xs text-on-surface-variant mb-4">{desc}</p>
    <div className="p-3 rounded bg-surface-container-low flex items-center justify-between text-xs">
      <span className="text-outline">{label}</span>
      <span className={`font-bold ${valueClass}`}>{value}</span>
    </div>
  </div>
)

export default ImpactCard
