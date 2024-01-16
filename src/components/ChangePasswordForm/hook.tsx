/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { ChangePasswordFormSchema } from './schema'
import { useRouter } from 'next/router'
import { errorNotification } from '../Notifiers/Error'
import { successNotification } from '../Notifiers/Success'
import { api } from '@/lib/axios'
import { useAuthContext } from '@/contexts/authContext'

export function useChangePasswordForm() {
  const router = useRouter()
  const { userEmail } = useAuthContext()

  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  async function onSubmit(data: ChangePasswordFormSchema) {
    try {
      const response = await api.post('/auth/change-password', {
        userEmail,
        newPassword: data.newPassword,
      })

      if (response.status === 200) {
        router.push('/auth/login')
        successNotification('Senha alterada com sucesso')
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Trata erros sobre a chamada HTTP
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
