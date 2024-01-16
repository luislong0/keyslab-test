import { RequestPasswordForm } from '@/components/RequestPasswordForm'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NextSeo } from 'next-seo'

export default function RequestPassword() {
  return (
    <>
      <NextSeo title={'Esqueci minha senha | Keyslab'} noindex />
      <AuthLayout>
        <main className="flex flex-col gap-2 max-w-lg p-4 mx-auto text-zinc-50">
          <h1 className="text-[28px] font-semibold">
            Esqueceu sua senha? Vamos resolver isso!
          </h1>
          <span className="font-base text-md text-zinc-400">
            Insira seu endereço de e-mail para receber um código de verificação.
            Enviaremos um e-mail para sua conta com as instruções sobre como
            usar o código para redefinir sua senha.
          </span>

          <RequestPasswordForm />
        </main>
      </AuthLayout>
    </>
  )
}
