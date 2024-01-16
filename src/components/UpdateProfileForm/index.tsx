/* eslint-disable react-hooks/exhaustive-deps */
import { IconInput } from '../Inputs/IconInput'
import { Gamepad2, Mail, User } from 'lucide-react'
import { DefaultButton } from '../Buttons/DefaultButton'
import { HookFormConfig } from '@/lib/HookForm'
import { UpdateProfileFormSchema, updateProfileFormSchema } from './schema'
import { FormProvider } from 'react-hook-form'
import { useUpdateProfileForm } from './hook'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export function UpdateProfileForm() {
  const { formMethods } = HookFormConfig<UpdateProfileFormSchema>({
    schema: updateProfileFormSchema,
  })

  const { onSubmit, onSubmitError } = useUpdateProfileForm()
  const { data } = useSession()

  async function fetchLocationInfo() {
    if (data) {
      formMethods.setValue('username', data?.user.username)
      formMethods.setValue('email', data?.user.email)
    }
  }

  useEffect(() => {
    fetchLocationInfo()
  }, [])

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onSubmitError)}
        className="w-full mt-8 max-w-[416px]"
      >
        <div className="flex flex-col w-full gap-6">
          <IconInput
            icon={<User className="text-zinc-800" size={28} />}
            name="username"
            type="text"
            placeholder="nome@exemplo.com"
            className="w-full text-zinc-50"
          />

          <IconInput
            icon={<Mail className="text-zinc-800" size={28} />}
            name="email"
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
                'Atualizar dados'
              )
            }
          />
        </div>
      </form>
    </FormProvider>
  )
}
