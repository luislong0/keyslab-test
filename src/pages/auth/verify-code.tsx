import { VerifyCodeForm } from '@/components/VerifyCodeForm'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NextSeo } from 'next-seo'

export default function VerifyCode() {
  return (
    <>
      <NextSeo title={'Verifique seu código | Keyslab'} noindex />
      <AuthLayout>
        <main className="flex flex-col gap-2 items-center max-w-xl p-4 mx-auto text-zinc-50">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">
              Uhuuul, agora você tem seu código em mãos!
            </h1>
            <span className="font-base text-lg text-zinc-400">
              Informe o código de verificação enviado para o seu e-mail a fim de
              iniciar o processo de redefinição de senha. Este código garantirá
              a segurança do procedimento, permitindo que você escolha uma nova
              senha
            </span>
          </div>

          <VerifyCodeForm />
        </main>
      </AuthLayout>
    </>
  )
}
