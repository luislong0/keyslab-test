/* eslint-disable @typescript-eslint/no-explicit-any */
import { createResetCodeDigits } from '@/utils/createResetCodeDigits'
import { RequestPasswordFormSchema } from './schema'
import { useAuthContext } from '@/contexts/authContext'
import { api } from '@/lib/axios'
import axios from 'axios'
import { errorNotification } from '../Notifiers/Error'
import { useRouter } from 'next/router'
import { successNotification } from '../Notifiers/Success'

export function useRequestPasswordForm() {
  const { setResetCode } = useAuthContext()
  const router = useRouter()

  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  async function onSubmit(data: RequestPasswordFormSchema) {
    const code = createResetCodeDigits() // Gerar numero de 5 dígitos
    setResetCode(code)

    try {
      const response = await api.post('/auth/send-reset-code-email', {
        email: data.requestEmail,
        code,
      })

      if (response.status === 200) {
        successNotification('Código enviado com sucesso')
        router.push('/auth/verify-code')
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        errorNotification(error.response.data.Message)
      } else {
        // Trata erros que não são de uma resposta HTTP (ex: problemas de rede, timeout, etc)
        console.error('Erro na request:', error)
        onSubmitError(error)
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
