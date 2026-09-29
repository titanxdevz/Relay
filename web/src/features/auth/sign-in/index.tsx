
import { Link, useSearch } from '@tanstack/react-router'
import { LogIn } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useStatus } from '@/hooks/use-status'

import { AuthLayout } from '../auth-layout'
import { TermsFooter } from '../components/terms-footer'
import { UserAuthForm } from './components/user-auth-form'

export function SignIn() {
  const { t } = useTranslation()
  const { redirect } = useSearch({ from: '/(auth)/sign-in' })
  const { status } = useStatus()

  return (
    <AuthLayout>
      <div className='w-full space-y-6'>
        <div className='space-y-2 text-left'>
          <div className='inline-flex size-10 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-500 shadow-xs'>
            <LogIn className='size-5' />
          </div>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              {t('Sign in')}
            </h2>
            {!status?.self_use_mode_enabled &&
              status?.register_enabled !== false && (
                <p className='text-muted-foreground mt-1 text-sm'>
                  {t("Don't have an account?")}{' '}
                  <Link
                    to='/sign-up'
                    className='text-primary hover:underline font-semibold'
                  >
                    {t('Sign up')}
                  </Link>
                </p>
              )}
          </div>
        </div>

        <UserAuthForm redirectTo={redirect} />

        <TermsFooter
          variant='sign-in'
          status={status}
          className='text-center pt-2'
        />
      </div>
    </AuthLayout>
  )
}
