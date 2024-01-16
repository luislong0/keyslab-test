import { Gamepad2, LockKeyhole } from 'lucide-react'
import { DefaultButton } from '../Buttons/DefaultButton'
import { HookFormConfig } from '@/lib/HookForm'
import { ChangePasswordFormSchema, changePasswordFormSchema } from './schema'
import { FormProvider } from 'react-hook-form'
import { useChangePasswordForm } from './hook'
import { PasswordInput } from '../Inputs/PasswordInput.tsx'

export function ChangePasswordForm() {
  const { formMethods } = HookFormConfig<ChangePasswordFormSchema>({
    schema: changePasswordFormSchema,
  })

  const { onSubmit, onSubmitError } = useChangePasswordForm()

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onSubmitError)}
        className="w-full mt-8"
      >
        <div className="flex flex-col w-full gap-6">
          <PasswordInput
            icon={<LockKeyhole className="text-zinc-800" size={28} />}
            name="newPassword"
            placeholder="********"
            className="w-full text-zinc-50"
          />

          <PasswordInput
            icon={<LockKeyhole className="text-zinc-800" size={28} />}
            name="confirmNewPassword"
            placeholder="********"
            className="w-full text-zinc-50"
          />
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <DefaultButton
            type="submit"
            className="bg-blue-500 text-zinc-950 font-semibold hover:bg-blue-400 transition-all"
            label={
              formMethods.formState.isSubmitting ? (
                <Gamepad2 className="animate-pulse" />
              ) : (
                'Trocar de senha'
              )
            }
          />
        </div>
      </form>
    </FormProvider>
  )
}
