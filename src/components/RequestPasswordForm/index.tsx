import { IconInput } from '../Inputs/IconInput'
import { Gamepad2, Mail } from 'lucide-react'
import { DefaultButton } from '../Buttons/DefaultButton'
import { HookFormConfig } from '@/lib/HookForm'
import { RequestPasswordFormSchema, requestPasswordFormSchema } from './schema'
import { FormProvider } from 'react-hook-form'
import { useRequestPasswordForm } from './hook'

export function RequestPasswordForm() {
  const { formMethods } = HookFormConfig<RequestPasswordFormSchema>({
    schema: requestPasswordFormSchema,
  })

  const { onSubmit, onSubmitError } = useRequestPasswordForm()

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onSubmitError)}
        className="w-full mt-8"
      >
        <div className="flex flex-col w-full gap-6">
          <IconInput
            icon={<Mail className="text-zinc-800" size={28} />}
            name="requestEmail"
            type="email"
            placeholder="nome@exemplo.com"
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
                'Enviar código'
              )
            }
          />
        </div>
      </form>
    </FormProvider>
  )
}
