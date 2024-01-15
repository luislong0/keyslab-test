import { IconInput } from '../Inputs/IconInput'
import { Mail, LockKeyhole } from 'lucide-react'
import { PasswordInput } from '../Inputs/PasswordInput.tsx'
import { DefaultLink } from '../Links/DefaultLink'
import { DefaultButton } from '../Buttons/DefaultButton'
import { HookFormConfig } from '@/lib/HookForm'
import { LoginFormSchema, loginFormSchema } from './schema'
import { FormProvider } from 'react-hook-form'
import { useLoginForm } from './hook'

export function LoginForm() {
  const { formMethods } = HookFormConfig<LoginFormSchema>({
    schema: loginFormSchema,
  })

  const { onSubmit, onSubmitError } = useLoginForm()

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onSubmitError)}
        className="w-full max-w-[416px] mt-8"
      >
        <div className="flex flex-col gap-6">
          <IconInput
            icon={<Mail className="text-zinc-800" size={28} />}
            name="email"
            type="email"
            placeholder="nome@exemplo.com"
            className="w-full text-zinc-50"
          />

          <PasswordInput
            icon={<LockKeyhole className="text-zinc-800" size={28} />}
            name="password"
            placeholder="********"
            className="w-full text-zinc-50"
          />
        </div>

        <div className="mt-2 w-full flex justify-end">
          <DefaultLink href={'/forgetPassword'} label="Esqueci minha senha" />
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <DefaultButton
            type="submit"
            className="bg-blue-500 text-zinc-950 font-semibold hover:bg-blue-400 transition-all"
            label="Entrar na conta"
          />

          <div className="flex gap-1 text-sm text-zinc-400 justify-center">
            <span>Ainda não tem conta?</span>
            <DefaultLink href={'/auth/register'} label="Registre-se" />
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
