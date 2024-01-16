import { ChangePasswordForm } from '@/components/ChangePasswordForm'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NextSeo } from 'next-seo'

export default function ChangePassword() {
  return (
    <>
      <NextSeo title={'Trocar senha | Keyslab'} noindex />
      <AuthLayout>
        <main className="flex flex-col gap-2 items-center max-w-xl p-4 mx-auto text-zinc-50">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">
              Troque agora mesmo sua senha!
            </h1>
            <span className="font-medium text-lg text-zinc-400">
              Mude agora mesmo sua senha de pelo menos 6 digitos!
            </span>
          </div>

          <ChangePasswordForm />
        </main>
      </AuthLayout>
    </>
  )
}
