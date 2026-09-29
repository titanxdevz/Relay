
import {
  Zap,
  Shield,
  Globe,
  Code,
  Gauge,
  DollarSign,
  Users,
  HeartHandshake,
  CheckCircle2,
  Lock,
  Activity,
  Terminal,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { getLobeIcon } from '@/lib/lobe-icon'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const routingProviders = [
    { name: 'OpenAI', icon: 'OpenAI', latency: '24ms', status: 'Online' },
    { name: 'Claude', icon: 'Claude.Color', latency: '31ms', status: 'Active' },
    { name: 'Gemini', icon: 'Gemini.Color', latency: '19ms', status: 'Fastest' },
    { name: 'DeepSeek', icon: 'DeepSeek.Color', latency: '28ms', status: 'Optimal' },
    { name: 'Qwen', icon: 'Qwen.Color', latency: '22ms', status: 'Online' },
    { name: 'Mistral', icon: 'Mistral.Color', latency: '26ms', status: 'Online' },
  ]

  const features = [
    {
      id: 'fast',
      num: '01',
      title: t('Lightning Fast'),
      desc: t(
        'Optimized network architecture ensures millisecond response times'
      ),
      span: 'md:col-span-2',
      badgeColor: 'border-sky-500/30 bg-sky-500/10 text-sky-500',
      icon: <Zap className='size-4 text-sky-500' />,
      visual: (
        <div className='mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3'>
          {routingProviders.map((item) => (
            <div
              key={item.name}
              className='group/item border-border/40 bg-card/60 hover:border-sky-500/40 hover:bg-card flex flex-col justify-between rounded-xl border p-3 shadow-2xs backdrop-blur-xs transition-all duration-300'
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='shrink-0'>{getLobeIcon(item.icon, 18)}</span>
                  <span className='text-xs font-semibold'>{item.name}</span>
                </div>
                <span className='size-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]' />
              </div>
              <div className='mt-2.5 flex items-center justify-between text-[11px] text-muted-foreground'>
                <span className='font-mono font-medium'>{item.latency}</span>
                <span className='text-[10px] font-medium text-emerald-500 dark:text-emerald-400'>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'secure',
      num: '02',
      title: t('Secure & Reliable'),
      desc: t(
        'Enterprise-grade security with comprehensive permission management'
      ),
      span: 'md:col-span-1',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500',
      icon: <Shield className='size-4 text-emerald-500' />,
      visual: (
        <div className='mt-6 space-y-2.5'>
          <div className='border-border/40 bg-card/60 flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs shadow-2xs backdrop-blur-xs'>
            <Lock className='size-4 text-emerald-500 shrink-0' />
            <span className='font-medium'>Passkeys &amp; WebAuthn Ready</span>
            <CheckCircle2 className='ml-auto size-3.5 text-emerald-500' />
          </div>
          <div className='border-border/40 bg-card/60 flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs shadow-2xs backdrop-blur-xs'>
            <Shield className='size-4 text-emerald-500 shrink-0' />
            <span className='font-medium'>Casbin Granular RBAC</span>
            <CheckCircle2 className='ml-auto size-3.5 text-emerald-500' />
          </div>
          <div className='border-border/40 bg-card/60 flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs shadow-2xs backdrop-blur-xs'>
            <Activity className='size-4 text-emerald-500 shrink-0' />
            <span className='font-medium'>AES-GCM Secret Protection</span>
            <CheckCircle2 className='ml-auto size-3.5 text-emerald-500' />
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      num: '03',
      title: t('Global Coverage'),
      desc: t('Multi-region deployment for stable global access'),
      span: 'md:col-span-1',
      badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-500',
      icon: <Globe className='size-4 text-violet-500' />,
      visual: (
        <div className='mt-6 space-y-2.5'>
          {[
            { region: 'US-East (Gateway Core)', ping: '1.2ms', active: true },
            { region: 'EU-Central (Edge Proxy)', ping: '2.4ms', active: true },
            { region: 'AP-East (Failover Cluster)', ping: '1.8ms', active: true },
          ].map((node) => (
            <div
              key={node.region}
              className='border-border/40 bg-card/60 flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs shadow-2xs backdrop-blur-xs'
            >
              <div className='flex items-center gap-2'>
                <span className='size-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]' />
                <span className='font-medium text-foreground/90'>{node.region}</span>
              </div>
              <span className='font-mono text-[11px] text-muted-foreground'>
                {node.ping}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'developer',
      num: '04',
      title: t('Developer Friendly'),
      desc: t('Compatible API routes for common AI application workflows'),
      span: 'md:col-span-2',
      badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-500',
      icon: <Code className='size-4 text-amber-500' />,
      visual: (
        <div className='mt-6 flex flex-col gap-3 rounded-xl border border-border/40 bg-card/50 p-4 font-mono text-xs shadow-2xs backdrop-blur-xs'>
          <div className='flex items-center justify-between border-b border-border/30 pb-2 text-[11px] text-muted-foreground'>
            <div className='flex items-center gap-1.5'>
              <Terminal className='size-3.5 text-sky-500' />
              <span>client.ts</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-500'>
                Zero SDK Changes
              </span>
            </div>
          </div>
          <div className='space-y-1 text-foreground/80 leading-relaxed overflow-x-auto'>
            <div><span className='text-purple-400'>import</span> OpenAI <span className='text-purple-400'>from</span> <span className='text-amber-400'>&apos;openai&apos;</span></div>
            <div><span className='text-purple-400'>const</span> ai = <span className='text-purple-400'>new</span> <span className='text-blue-400'>OpenAI</span>&#123;</div>
            <div className='pl-4'><span className='text-sky-400'>baseURL</span>: <span className='text-emerald-400'>&apos;https://your-api.com/v1&apos;</span>, <span className='text-muted-foreground'>// That&apos;s all you need!</span></div>
            <div className='pl-4'><span className='text-sky-400'>apiKey</span>: <span className='text-amber-400'>&apos;sk-gateway-key...&apos;</span></div>
            <div>&#125;</div>
          </div>
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Gauge className='size-5 text-sky-500' strokeWidth={1.5} />,
      title: t('High Performance'),
      desc: t('Support for high concurrency with automatic load balancing'),
      gradient: 'from-sky-500/10 to-transparent',
    },
    {
      icon: <DollarSign className='size-5 text-emerald-500' strokeWidth={1.5} />,
      title: t('Transparent Billing'),
      desc: t('Pay-as-you-go with real-time usage monitoring'),
      gradient: 'from-emerald-500/10 to-transparent',
    },
    {
      icon: <Users className='size-5 text-indigo-500' strokeWidth={1.5} />,
      title: t('Team Collaboration'),
      desc: t('Multi-user management with flexible permission allocation'),
      gradient: 'from-indigo-500/10 to-transparent',
    },
    {
      icon: <HeartHandshake className='size-5 text-fuchsia-500' strokeWidth={1.5} />,
      title: t('Open Source'),
      desc: t('Community driven, self-hosted, and extensible'),
      gradient: 'from-fuchsia-500/10 to-transparent',
    },
  ]

  return (
    <section className='relative z-10 px-6 py-20 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        {/* Section Header */}
        <AnimateInView className='mx-auto mb-14 max-w-2xl text-center md:mb-16'>
          <p className='text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase'>
            {t('Core Features')}
          </p>
          <h2 className='text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl'>
            {t('Built for developers,')}
            <br />
            <span className='bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent'>
              {t('designed for scale')}
            </span>
          </h2>
        </AnimateInView>

        {/* Bento Grid */}
        <div className='grid gap-4 md:grid-cols-3 md:gap-5'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={`group border-border/50 bg-card/60 hover:border-border hover:bg-card/85 relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-7 ${f.span}`}
            >
              <div>
                <div className='mb-3.5 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div
                      className={`flex size-8 items-center justify-center rounded-lg border text-xs font-bold ${f.badgeColor}`}
                    >
                      {f.num}
                    </div>
                    <h3 className='text-base font-bold tracking-tight'>{f.title}</h3>
                  </div>
                  <div className='border-border/40 bg-muted/40 text-muted-foreground flex size-8 items-center justify-center rounded-lg border'>
                    {f.icon}
                  </div>
                </div>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {f.desc}
                </p>
              </div>
              {f.visual}
            </AnimateInView>
          ))}
        </div>

        {/* Additional Features Row */}
        <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 80}
              animation='fade-up'
              className='group border-border/40 bg-card/50 hover:border-border hover:bg-card/80 relative overflow-hidden rounded-2xl border p-5 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md'
            >
              <div
                className={`pointer-events-none absolute -top-8 -right-8 size-20 rounded-full bg-gradient-to-br ${f.gradient} blur-xl opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className='border-border/40 bg-muted/40 text-muted-foreground group-hover:text-foreground mb-3.5 flex size-10 items-center justify-center rounded-xl border transition-colors'>
                {f.icon}
              </div>
              <h3 className='mb-1.5 text-sm font-bold tracking-tight'>{f.title}</h3>
              <p className='text-muted-foreground text-xs leading-relaxed'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
