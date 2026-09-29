import { useRef, useEffect, useCallback } from 'react'
import { Globe, Cpu, Network, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

function Counter(props: CounterProps) {
  const { end, suffix = '', prefix = '', duration = 1600, decimals = 0 } = props
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  const formatValue = useCallback(
    (v: number) =>
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString(),
    [decimals]
  )

  const animate = useCallback(() => {
    const el = ref.current
    if (!el) return
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = `${prefix}${formatValue(eased * end)}${suffix}`
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, prefix, suffix, formatValue])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      el.textContent = `${prefix}${formatValue(end)}${suffix}`
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate, end, prefix, suffix, formatValue])

  return (
    <span ref={ref} className='tabular-nums'>
      {prefix}0{suffix}
    </span>
  )
}

interface StatsProps {
  className?: string
}

interface StatItem {
  end: number
  suffix: string
  label: string
  decimals?: number
  icon: typeof Globe
  gradient: string
}

export function Stats(_props: StatsProps) {
  const { t } = useTranslation()

  const stats: StatItem[] = [
    {
      end: 50,
      suffix: '+',
      label: t('upstream services integrated'),
      icon: Globe,
      gradient: 'from-blue-500/10 to-transparent text-blue-500',
    },
    {
      end: 100,
      suffix: '+',
      label: t('model billing support'),
      icon: Cpu,
      gradient: 'from-violet-500/10 to-transparent text-violet-500',
    },
    {
      end: 50,
      suffix: '+',
      label: t('compatible API routes'),
      icon: Network,
      gradient: 'from-fuchsia-500/10 to-transparent text-fuchsia-500',
    },
    {
      end: 10,
      suffix: '+',
      label: t('scheduling controls'),
      icon: ShieldCheck,
      gradient: 'from-emerald-500/10 to-transparent text-emerald-500',
    },
  ]

  return (
    <div className='border-border/40 relative z-10 border-y bg-muted/15 backdrop-blur-xs'>
      <div className='mx-auto max-w-6xl px-6 py-10 md:py-14'>
        <div className='grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4'>
          {stats.map((s) => {
            const IconComponent = s.icon
            return (
              <div
                key={s.label}
                className='group border-border/40 bg-card/50 hover:border-border hover:bg-card/80 relative overflow-hidden rounded-2xl border p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6'
              >
                <div
                  className={`pointer-events-none absolute -top-8 -right-8 size-24 rounded-full bg-gradient-to-br ${s.gradient} blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className='flex items-center justify-between'>
                  <div className='text-3xl font-extrabold tracking-tight md:text-4xl'>
                    <Counter end={s.end} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className='border-border/40 bg-muted/30 text-muted-foreground flex size-9 items-center justify-center rounded-xl border transition-colors group-hover:text-foreground'>
                    <IconComponent className='size-4' />
                  </div>
                </div>
                <div className='text-muted-foreground mt-3 text-xs font-medium leading-relaxed sm:text-sm'>
                  {s.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
