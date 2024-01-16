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
            <h1 className="text-[28px] font-semibold">
              Troque agora mesmo sua senha!
            </h1>
            <span className="font-base text-md text-zinc-400">
              Crie agora uma nova senha, composta por no mínimo 8 caracteres.
              Sua escolha de senha robusta garante a proteção ideal para sua
              conta, proporcionando tranquilidade e controle total sobre sua
              experiência conosco.
            </span>
          </div>

          <ChangePasswordForm />
        </main>
      </AuthLayout>
    </>
  )
}
