import { Link } from '@tanstack/react-router'
import { UserPlus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useStatus } from '@/hooks/use-status'

import { AuthLayout } from '../auth-layout'
import { TermsFooter } from '../components/terms-footer'
import { SignUpForm } from './components/sign-up-form'

export function SignUp() {
  const { t } = useTranslation()
  const { status } = useStatus()

  return (
    <AuthLayout>
      <div className='w-full space-y-6'>
        <div className='space-y-2 text-left'>
          <div className='inline-flex size-10 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 shadow-xs'>
            <UserPlus className='size-5' />
          </div>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              {t('Create an account')}
            </h2>
            <p className='text-muted-foreground mt-1 text-sm'>
              {t('Already have an account?')}{' '}
              <Link
                to='/sign-in'
                className='text-primary hover:underline font-semibold'
              >
                {t('Sign in')}
              </Link>
            </p>
          </div>
        </div>

        <SignUpForm />

        <TermsFooter
          variant='sign-up'
          status={status}
          className='text-center pt-2'
        />
      </div>
    </AuthLayout>
  )
}
