/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/lib/axios'
import { UpdateProfileFormSchema } from './schema'
import { successNotification } from '../Notifiers/Success'
import axios from 'axios'
import { errorNotification } from '../Notifiers/Error'

export function useUpdateProfileForm() {
  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  async function onSubmit(data: UpdateProfileFormSchema) {
    try {
      const response = await api.put('/user/update', {
        email: data.email,
        username: data.username,
      })

      if (response.status === 200) {
        successNotification('Informações alteradas com sucesso!')
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
