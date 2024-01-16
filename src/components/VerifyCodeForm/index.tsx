import { IconInput } from '../Inputs/IconInput'
import { Gamepad2 } from 'lucide-react'
import { DefaultButton } from '../Buttons/DefaultButton'
import { HookFormConfig } from '@/lib/HookForm'
import { FormProvider } from 'react-hook-form'
import { VerifyCodeFormSchema, verifyCodeFormSchema } from './schema'
import { useVerifyCodeForm } from './hook'

export function VerifyCodeForm() {
  const { formMethods } = HookFormConfig<VerifyCodeFormSchema>({
    schema: verifyCodeFormSchema,
  })

  const { onSubmit, onSubmitError } = useVerifyCodeForm()

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onSubmitError)}
        className="w-fit mt-8"
      >
        <div className="flex flex-col w-full gap-6">
          <IconInput
            icon={
              <span className="text-zinc-800 flex font-extrabold text-5xl">
                K
              </span>
            }
            name="code"
            type="text"
            placeholder="99999"
            maxLength={5}
            className="w-56 text-zinc-50 text-5xl tracking-[0.24em] font-semibold"
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
