
import { cn } from '@/lib/utils'

import { useSuppressSettingsSectionHeader } from './settings-page-context'

type SettingsSectionProps = {
  title: string
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>
  children: React.ReactNode
  className?: string
}

export function SettingsSection({
  title,
  titleProps,
  children,
  className,
}: SettingsSectionProps) {
  const suppressHeader = useSuppressSettingsSectionHeader()

  return (
    <section className={cn('bg-card/60 backdrop-blur-xl overflow-hidden rounded-2xl border shadow-xs p-4 sm:p-5 flex flex-col gap-5', className)}>
      {!suppressHeader && (
        <div className='flex flex-col gap-1'>
          <h3
            {...titleProps}
            className={cn('text-base font-semibold', titleProps?.className)}
          >
            {title}
          </h3>
        </div>
      )}
      {children}
    </section>
  )
}
