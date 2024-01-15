import { RequestPasswordForm } from '@/components/RequestPasswordForm'
import { AuthLayout } from '@/layouts/AuthLayout'

export default function VerifyCode() {
  return (
    <AuthLayout>
      <main className="flex flex-col gap-2 max-w-lg p-4 mx-auto text-zinc-50">
        <h1 className="text-3xl font-semibold">
          Uhuuul, agora você tem seu código em mãos!
        </h1>
        <span className="font-medium text-lg text-zinc-400">
          Digite o código que foi enviado em seu email para poder trocar de
          senha
        </span>

        <RequestPasswordForm />
      </main>
    </AuthLayout>
  )
}
