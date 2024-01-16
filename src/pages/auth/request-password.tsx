import { RequestPasswordForm } from '@/components/RequestPasswordForm'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NextSeo } from 'next-seo'

export default function RequestPassword() {
  return (
    <>
      <NextSeo title={'Esqueci minha senha | Keyslab'} noindex />
      <AuthLayout>
        <main className="flex flex-col gap-2 max-w-lg p-4 mx-auto text-zinc-50">
          <h1 className="text-3xl font-semibold">
            Esqueceu sua senha? Vamos resolver isso!
          </h1>
          <span className="font-medium text-lg text-zinc-400">
            Digite seu endereço de e-mail para obter orientações sobre como
            redefinir sua senha. Um e-mail será enviado à sua conta com as
            instruções para alteração da senha.
          </span>

          <RequestPasswordForm />
        </main>
      </AuthLayout>
    </>
  )
}
