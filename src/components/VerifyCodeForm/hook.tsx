/* eslint-disable @typescript-eslint/no-explicit-any */
import { VerifyCodeFormSchema } from './schema'
import { useAuthContext } from '@/contexts/authContext'
import { errorNotification } from '../Notifiers/Error'
import { useRouter } from 'next/router'
import { successNotification } from '../Notifiers/Success'

export function useVerifyCodeForm() {
  const { resetCode } = useAuthContext()
  const router = useRouter()

  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  async function onSubmit(data: VerifyCodeFormSchema) {
    if (data.code === resetCode) {
      router.push('/auth/change-password')
      successNotification('Código válido')
    } else {
      errorNotification('Código inválido')
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
