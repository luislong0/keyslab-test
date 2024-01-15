import { IconInput } from '../Inputs/IconInput'
import { Mail, LockKeyhole, User, Calendar, Gamepad2 } from 'lucide-react'
import { PasswordInput } from '../Inputs/PasswordInput.tsx'
import { DefaultButton } from '../Buttons/DefaultButton'
import { HookFormConfig } from '@/lib/HookForm'
import { FormProvider } from 'react-hook-form'
import { RegisterFormSchema, registerFormSchema } from './schema'
import { useRegisterForm } from './hook'

export function RegisterForm() {
  const { formMethods } = HookFormConfig<RegisterFormSchema>({
    schema: registerFormSchema,
  })

  const { onSubmit, onSubmitError } = useRegisterForm()

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onSubmitError)}
        className="w-full max-w-[416px] mt-8"
      >
        <div className="flex flex-col gap-6">
          <IconInput
            icon={<User className="text-zinc-800" size={28} />}
            name="username"
            type="string"
            placeholder="john doe"
            className="w-full text-zinc-50"
          />

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

          <PasswordInput
            icon={<LockKeyhole className="text-zinc-800" size={28} />}
            name="confirmPassword"
            placeholder="********"
            className="w-full text-zinc-50"
          />

          <IconInput
            icon={<Calendar className="text-zinc-800" size={28} />}
            name="birthDate"
            type="date"
            placeholder="nome@exemplo.com"
            className="w-full text-zinc-50"
          />
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <DefaultButton
            type="submit"
            disabled={formMethods.formState.isSubmitting}
            className="bg-blue-500 text-zinc-950 font-semibold hover:bg-blue-400 transition-all"
            label={
              formMethods.formState.isSubmitting ? (
                <Gamepad2 className="animate-pulse" />
              ) : (
                'Registre-se'
              )
            }
          />
        </div>
      </form>
    </FormProvider>
  )
}
