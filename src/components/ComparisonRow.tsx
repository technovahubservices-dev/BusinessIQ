import type { FC } from 'react'

interface ComparisonRowProps {
  number: number
  leftIcon: string
  leftLabel: string
  leftBadge: string
  leftTitle: string
  leftDesc: string
  rightIcon: string
  rightLabel: string
  rightBadge: string
  rightTitle: string
  rightDesc: string
}

const ComparisonRow: FC<ComparisonRowProps> = ({
  number,
  leftIcon,
  leftLabel,
  leftBadge,
  leftTitle,
  leftDesc,
  rightIcon,
  rightLabel,
  rightBadge,
  rightTitle,
  rightDesc,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 p-4 lg:p-6 rounded bg-surface-container-low hover:bg-surface-container transition-colors">
    {/* Traditional */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary-container/15 text-secondary flex-shrink-0 flex items-center justify-center">
        <span className="material-symbols-outlined">{leftIcon}</span>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider">
            {number}. {leftLabel}
          </span>
          <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-semibold">
            {leftBadge}
          </span>
        </div>
        <p className="font-bold text-on-surface">{leftTitle}</p>
        <p className="text-xs text-on-surface-variant mt-1">{leftDesc}</p>
      </div>
    </div>
    {/* Digital */}
    <div className="flex items-start gap-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-outline-variant/30 md:pl-6">
      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center">
        <span className="material-symbols-outlined">{rightIcon}</span>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {rightLabel}
          </span>
          <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold">
            {rightBadge}
          </span>
        </div>
        <p className="font-bold text-on-surface">{rightTitle}</p>
        <p className="text-xs text-on-surface-variant mt-1">{rightDesc}</p>
      </div>
    </div>
  </div>
)

export default ComparisonRow
