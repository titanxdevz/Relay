
import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'
import { getLobeIcon } from '@/lib/lobe-icon'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

const SHOWCASE_MODELS = [
  { name: 'OpenAI', icon: 'OpenAI', desc: 'GPT-4o' },
  { name: 'Claude', icon: 'Claude.Color', desc: 'Claude 3.7' },
  { name: 'Gemini', icon: 'Gemini.Color', desc: 'Gemini 2.5' },
  { name: 'DeepSeek', icon: 'DeepSeek.Color', desc: 'R1 / V3' },
  { name: 'Qwen', icon: 'Qwen.Color', desc: 'Qwen 2.5' },
  { name: 'Mistral', icon: 'Mistral.Color', desc: 'Mistral Large' },
] as const

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const docsUrl =
    (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  const renderDocsButton = () => {
    const docsButtonClassName =
      'group border-border/60 hover:border-border hover:bg-muted/40 h-11 items-center gap-1.5 rounded-xl px-5 text-sm font-medium backdrop-blur-sm transition-all duration-300'
    const docsButtonContent = (
      <>
        <BookOpen className='text-muted-foreground/80 group-hover:text-foreground size-4 transition-colors duration-200' />
        <span>{t('Docs')}</span>
      </>
    )

    if (docsUrl.startsWith('http')) {
      return (
        <Button
          variant='outline'
          className={docsButtonClassName}
          render={
            <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
          }
        >
          {docsButtonContent}
        </Button>
      )
    }

    return (
      <Button
        variant='outline'
        className={docsButtonClassName}
        render={<Link to={docsUrl} />}
      >
        {docsButtonContent}
      </Button>
    )
  }

  return (
    <section className='relative z-10 overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28'>
      {/* Dynamic ambient background glow */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-20'
        style={{
          background: [
            'radial-gradient(ellipse 65% 50% at 50% 12%, oklch(0.7 0.18 250 / 70%) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 20% 35%, oklch(0.65 0.18 290 / 40%) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 80% 35%, oklch(0.65 0.16 200 / 40%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_20%,transparent_100%)] bg-[size:3.5rem_3.5rem] opacity-[0.07] dark:opacity-[0.12]'
      />

      <div className='mx-auto flex max-w-4xl flex-col items-center text-center'>
        {/* Shimmering live pill badge */}
        <div
          className='landing-animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-medium text-sky-600 shadow-sm backdrop-blur-md dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300'
          style={{ animationDelay: '0ms' }}
        >
          <span className='relative flex size-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75' />
            <span className='relative inline-flex size-2 rounded-full bg-sky-500 dark:bg-sky-400' />
          </span>
          <span className='tracking-wide'>{t('AI Application Infrastructure Foundation')}</span>
        </div>

        {/* Hero headline with gradient */}
        <h1
          className='landing-animate-fade-up max-w-4xl text-[clamp(2.5rem,6.5vw,4.25rem)] leading-[1.08] font-extrabold tracking-tight text-balance'
          style={{ animationDelay: '60ms' }}
        >
          {t('Unified API Gateway for')}
          <br />
          <span className='bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-indigo-300 dark:to-purple-400'>
            {t('Vast Range of AI Models')}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className='landing-animate-fade-up text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed text-balance opacity-0 md:text-lg'
          style={{ animationDelay: '120ms' }}
        >
          {t(
            'Access a vast selection of models via a standard, unified API protocol. Power AI applications, manage digital assets, and connect the Future.'
          )}
        </p>

        {/* CTA Buttons */}
        <div
          className='landing-animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3.5 opacity-0'
          style={{ animationDelay: '180ms' }}
        >
          {props.isAuthenticated ? (
            <>
              <Button
                className='group h-11 rounded-xl px-6 text-sm font-medium shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]'
                render={<Link to='/dashboard' />}
              >
                {t('Go to Dashboard')}
                <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              {renderDocsButton()}
            </>
          ) : (
            <>
              <Button
                className='group h-11 rounded-xl px-6 text-sm font-medium shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              <Button
                variant='outline'
                className='border-border/60 hover:border-border hover:bg-muted/40 h-11 rounded-xl px-6 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]'
                render={<Link to='/pricing' />}
              >
                {t('View Pricing')}
              </Button>
              {renderDocsButton()}
            </>
          )}
        </div>

        {/* Supported Models Strip */}
        <div
          className='landing-animate-fade-up mt-12 flex flex-wrap items-center justify-center gap-2.5 opacity-0 sm:mt-16 sm:gap-3'
          style={{ animationDelay: '240ms' }}
        >
          {SHOWCASE_MODELS.map((item) => (
            <div
              key={item.name}
              className='border-border/40 bg-card/60 hover:border-border hover:bg-card/90 flex items-center gap-2 rounded-xl border px-3 py-1.5 shadow-xs backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5'
            >
              <span className='shrink-0'>{getLobeIcon(item.icon, 16)}</span>
              <span className='text-xs font-semibold'>{item.name}</span>
              <span className='text-muted-foreground/60 text-[11px]'>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
