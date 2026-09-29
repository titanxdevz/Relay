
import { Link } from '@tanstack/react-router'
import { ArrowRight, Sparkles, Terminal } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { CopyButton } from '@/components/copy-button'
import { Button } from '@/components/ui/button'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  if (props.isAuthenticated) {
    return null
  }

  const quickStartCmd = 'curl -sSL https://get.new-api.org | bash'

  return (
    <section className='relative z-10 px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-5xl'>
        <AnimateInView
          animation='scale-in'
          className='bg-card/60 backdrop-blur-xl border-border/60 relative overflow-hidden rounded-3xl border p-8 shadow-2xl md:p-16 text-center'
        >
          {/* Ambient glowing radial effects */}
          <div
            aria-hidden
            className='pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-3xl'
          />
          <div
            aria-hidden
            className='pointer-events-none absolute -bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl'
          />

          {/* Sparkle badge */}
          <div className='mb-6 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary'>
            <Sparkles className='size-3.5' />
            <span>Enterprise Ready & Open Protocol</span>
          </div>

          <h2 className='text-3xl font-extrabold tracking-tight text-balance md:text-5xl lg:leading-tight'>
            {t('Ready to simplify')}{' '}
            <span className='bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              {t('your AI integration?')}
            </span>
          </h2>

          <p className='text-muted-foreground mx-auto mt-4 max-w-xl text-sm leading-relaxed md:text-base'>
            {t(
              'Deploy your own gateway and start routing requests through your configured upstream services.'
            )}
          </p>

          {/* Quick-start CLI command bar */}
          <div className='mx-auto mt-8 flex max-w-md items-center justify-between gap-2 rounded-xl border border-border/70 bg-muted/40 px-4 py-2.5 font-mono text-xs shadow-inner'>
            <div className='flex items-center gap-2 overflow-hidden text-left'>
              <Terminal className='size-4 shrink-0 text-sky-400' />
              <span className='text-muted-foreground select-none'>$</span>
              <span className='truncate text-foreground/90'>{quickStartCmd}</span>
            </div>
            <CopyButton
              value={quickStartCmd}
              size='sm'
              variant='ghost'
              className='size-7 shrink-0 text-muted-foreground hover:text-foreground'
            />
          </div>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-3.5'>
            <Button
              size='lg'
              className='group h-11 px-7 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.02]'
              render={<Link to='/sign-up' />}
            >
              {t('Get Started')}
              <ArrowRight className='ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='h-11 px-6 rounded-xl border-border/70 bg-card/60 backdrop-blur-md hover:bg-muted/60'
              render={<Link to='/pricing' />}
            >
              {t('View Pricing')}
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
