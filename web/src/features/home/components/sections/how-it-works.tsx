
import { BarChart3, CheckCircle2, Settings, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { Badge } from '@/components/ui/badge'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      num: '01',
      title: t('Configure'),
      desc: t(
        'Add your API keys, set up channels and configure access permissions'
      ),
      icon: <Settings className='size-5 text-sky-500' strokeWidth={1.8} />,
      borderGlow: 'hover:border-sky-500/40',
      badgeClass: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
      preview: (
        <div className='bg-muted/30 border-border/40 mt-5 rounded-xl border p-3.5 text-left font-mono'>
          <div className='text-muted-foreground mb-2 flex items-center justify-between text-[11px] font-sans font-medium'>
            <span>Channel Routing</span>
            <span className='flex items-center gap-1 text-emerald-500 font-sans text-[10px]'>
              <span className='size-1.5 rounded-full bg-emerald-500 animate-pulse' />
              Online
            </span>
          </div>
          <div className='flex flex-wrap gap-1.5'>
            {['OpenAI', 'Anthropic', 'Gemini', 'DeepSeek'].map((channel) => (
              <span
                key={channel}
                className='bg-background/80 border-border/50 inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] text-foreground/80'
              >
                <CheckCircle2 className='size-2.5 text-emerald-500' />
                {channel}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: t('Connect'),
      desc: t(
        'Connect through OpenAI, Claude, Gemini, and other compatible API routes'
      ),
      icon: <Zap className='size-5 text-violet-500' strokeWidth={1.8} />,
      borderGlow: 'hover:border-violet-500/40',
      badgeClass: 'bg-violet-500/10 text-violet-500 border-violet-500/20',
      preview: (
        <div className='bg-muted/30 border-border/40 mt-5 rounded-xl border p-3.5 text-left font-mono'>
          <div className='text-muted-foreground mb-2 flex items-center justify-between text-[11px] font-sans font-medium'>
            <span>Base URL Config</span>
            <span className='text-violet-400 text-[10px] font-sans'>OpenAI SDK</span>
          </div>
          <div className='text-muted-foreground space-y-0.5 text-[11px] leading-relaxed'>
            <p>
              <span className='text-purple-400 font-semibold'>baseURL:</span>{' '}
              <span className='text-emerald-400'>&apos;https://gateway/v1&apos;</span>
            </p>
            <p>
              <span className='text-purple-400 font-semibold'>apiKey:</span>{' '}
              <span className='text-amber-400'>&apos;sk-relay-...&apos;</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: t('Monitor'),
      desc: t('Track usage, costs and performance with real-time analytics'),
      icon: <BarChart3 className='size-5 text-emerald-500' strokeWidth={1.8} />,
      borderGlow: 'hover:border-emerald-500/40',
      badgeClass: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      preview: (
        <div className='bg-muted/30 border-border/40 mt-5 rounded-xl border p-3.5 text-left font-mono'>
          <div className='text-muted-foreground mb-2 flex items-center justify-between text-[11px] font-sans font-medium'>
            <span>Live Telemetry</span>
            <span className='text-emerald-500 text-[10px] font-sans font-semibold'>99.99%</span>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='bg-background/80 border-border/40 rounded-lg border p-1.5 text-center'>
              <div className='text-muted-foreground text-[10px] font-sans'>Avg Latency</div>
              <div className='text-foreground font-semibold text-xs'>18ms</div>
            </div>
            <div className='bg-background/80 border-border/40 rounded-lg border p-1.5 text-center'>
              <div className='text-muted-foreground text-[10px] font-sans'>Throughput</div>
              <div className='text-foreground font-semibold text-xs'>1.4k tok/s</div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className='border-border/40 relative z-10 border-t px-6 py-20 md:py-28'>
      {/* Subtle background glow */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 flex items-center justify-center'
      >
        <div className='bg-primary/5 size-96 rounded-full blur-3xl' />
      </div>

      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mx-auto mb-14 max-w-2xl text-center md:mb-16'>
          <Badge
            variant='outline'
            className='border-border/60 bg-muted/40 mb-3 px-3 py-1 text-xs font-semibold tracking-wider uppercase'
          >
            {t('How It Works')}
          </Badge>
          <h2 className='text-2xl font-bold tracking-tight text-balance md:text-3xl lg:text-4xl'>
            {t('Three steps to get started')}
          </h2>
        </AnimateInView>

        <div className='grid gap-6 md:grid-cols-3 md:gap-8'>
          {steps.map((step, i) => (
            <AnimateInView
              key={step.num}
              delay={i * 120}
              animation='fade-up'
              className={`bg-card/40 backdrop-blur-md border-border/50 hover:shadow-primary/5 group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${step.borderGlow}`}
            >
              <div>
                <div className='mb-5 flex items-center justify-between'>
                  <div className='border-border/50 bg-background/80 flex size-11 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-105'>
                    {step.icon}
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-xs font-bold ${step.badgeClass}`}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className='mb-2 text-lg font-semibold tracking-tight'>
                  {step.title}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {step.desc}
                </p>
              </div>

              {step.preview}
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
