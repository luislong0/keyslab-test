/* eslint-disable @typescript-eslint/no-explicit-any */
import { signIn } from 'next-auth/react'
import { LoginFormSchema } from './schema'
import { useRouter } from 'next/router'
import { errorNotification } from '../Notifiers/Error'
import { successNotification } from '../Notifiers/Success'

export function useLoginForm() {
  const router = useRouter()

  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  async function onSubmit(data: LoginFormSchema) {
    console.log(data)

    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
    })

    if (result) {
      if (!result.ok) {
        errorNotification('E-mail ou senha incorretos. Tente novamente.')
      } else {
        router.push('/')
        successNotification('Login realizado com sucesso!')
      }
    }
  }

  function onSubmitError(err: any) {
    console.log(err)
  }

  return {
    onSubmit,
    onSubmitError,
  }
}
