
import { Link } from '@tanstack/react-router'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Skeleton } from '@/components/ui/skeleton'
import { useSystemConfig } from '@/hooks/use-system-config'
import { getLobeIcon } from '@/lib/lobe-icon'

type AuthLayoutProps = {
  children: React.ReactNode
}

const BRAND_MODELS = [
  { name: 'OpenAI', icon: 'OpenAI' },
  { name: 'Claude', icon: 'Claude.Color' },
  { name: 'Gemini', icon: 'Gemini.Color' },
  { name: 'DeepSeek', icon: 'DeepSeek.Color' },
] as const

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()
  const { systemName, logo, loading } = useSystemConfig()

  return (
    <div className='relative min-h-screen w-full bg-background lg:grid lg:grid-cols-12'>
      {/* Left Showcase Panel - Desktop Only */}
      <div className='relative hidden overflow-hidden bg-zinc-950 p-10 text-white lg:col-span-5 lg:flex lg:flex-col lg:justify-between xl:col-span-6 xl:p-14'>
        {/* Background ambient gradient glow */}
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 -z-10 opacity-70'
          style={{
            background: [
              'radial-gradient(ellipse 70% 60% at 20% 25%, oklch(0.65 0.22 260 / 35%) 0%, transparent 70%)',
              'radial-gradient(ellipse 60% 50% at 85% 75%, oklch(0.6 0.2 290 / 25%) 0%, transparent 70%)',
            ].join(', '),
          }}
        />
        {/* Subtle grid pattern */}
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]'
        />

        {/* Top: Logo & System Name */}
        <Link
          to='/'
          className='group inline-flex items-center gap-3 transition-opacity hover:opacity-90'
        >
          <div className='relative size-9'>
            {loading ? (
              <Skeleton className='absolute inset-0 rounded-xl bg-white/20' />
            ) : (
              <img
                src={logo}
                alt={t('Logo')}
                className='size-9 rounded-xl object-cover ring-1 ring-white/20 shadow-md'
              />
            )}
          </div>
          {loading ? (
            <Skeleton className='h-6 w-28 bg-white/20' />
          ) : (
            <span className='text-lg font-bold tracking-tight text-white'>
              {systemName}
            </span>
          )}
        </Link>

        {/* Center: Showcase Content */}
        <div className='my-auto max-w-lg space-y-6 py-12'>
          <div className='inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-medium text-sky-300 backdrop-blur-md'>
            <span className='size-2 rounded-full bg-sky-400 animate-pulse' />
            <span>{t('AI Application Infrastructure Foundation')}</span>
          </div>

          <h2 className='text-3xl font-extrabold tracking-tight text-balance leading-tight text-white xl:text-4xl'>
            {t('Unified API Gateway for')}
            <br />
            <span className='bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent'>
              {t('Vast Range of AI Models')}
            </span>
          </h2>

          <p className='text-zinc-400 text-sm leading-relaxed xl:text-base'>
            {t(
              'Access a vast selection of models via a standard, unified API protocol. Power AI applications, manage digital assets, and connect the Future.'
            )}
          </p>

          {/* Model Ecosystem Ribbon */}
          <div className='flex flex-wrap items-center gap-2 pt-2'>
            {BRAND_MODELS.map((item) => (
              <div
                key={item.name}
                className='flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300 backdrop-blur-md'
              >
                <span>{getLobeIcon(item.icon, 16)}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className='space-y-3 pt-6 border-t border-white/10'>
            <div className='flex items-center gap-2.5 text-xs text-zinc-300'>
              <CheckCircle2 className='size-4 text-emerald-400 shrink-0' />
              <span>Sub-20ms ultra-low latency upstream relay</span>
            </div>
            <div className='flex items-center gap-2.5 text-xs text-zinc-300'>
              <CheckCircle2 className='size-4 text-emerald-400 shrink-0' />
              <span>WebAuthn, Passkeys, TOTP & Casbin RBAC security</span>
            </div>
            <div className='flex items-center gap-2.5 text-xs text-zinc-300'>
              <CheckCircle2 className='size-4 text-emerald-400 shrink-0' />
              <span>Real-time multi-currency token quotas & analytics</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Indicator */}
        <div className='flex items-center justify-between text-xs text-zinc-400'>
          <span className='flex items-center gap-2'>
            <span className='size-2 rounded-full bg-emerald-400' />
            <span>High Availability Gateway</span>
          </span>
          <span>Open Protocol</span>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className='relative flex min-h-screen flex-col justify-between p-6 sm:p-10 lg:col-span-7 xl:col-span-6'>
        {/* Ambient background glow */}
        <div
          aria-hidden
          className='pointer-events-none absolute top-12 right-12 -z-10 size-80 rounded-full bg-primary/5 blur-3xl'
        />

        {/* Top Bar Navigation */}
        <div className='flex items-center justify-between'>
          {/* Mobile Logo */}
          <Link
            to='/'
            className='flex items-center gap-2 transition-opacity hover:opacity-80 lg:hidden'
          >
            <div className='relative size-8'>
              {loading ? (
                <Skeleton className='absolute inset-0 rounded-full' />
              ) : (
                <img
                  src={logo}
                  alt={t('Logo')}
                  className='size-8 rounded-full object-cover'
                />
              )}
            </div>
            {loading ? (
              <Skeleton className='h-6 w-24' />
            ) : (
              <span className='text-lg font-bold'>{systemName}</span>
            )}
          </Link>

          {/* Back to Home link */}
          <Link
            to='/'
            className='text-muted-foreground hover:text-foreground group ml-auto inline-flex items-center gap-1.5 text-xs font-medium transition-colors'
          >
            <ArrowLeft className='size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5' />
            <span>{t('Back')}</span>
          </Link>
        </div>

        {/* Centered Glass Form Card */}
        <div className='my-auto flex w-full items-center justify-center py-8'>
          <div className='bg-card/70 border-border/60 w-full max-w-[460px] rounded-2xl border p-6 shadow-2xl backdrop-blur-xl sm:p-8'>
            {children}
          </div>
        </div>

        {/* Bottom subtle copyright / spacing */}
        <div className='text-muted-foreground/60 text-center text-xs'>
          {systemName}
        </div>
      </div>
    </div>
  )
}
