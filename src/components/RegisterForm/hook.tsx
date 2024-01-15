/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/lib/axios'
import { RegisterFormSchema } from './schema'
import axios from 'axios'
import { errorNotification } from '../Notifiers/Error'

export function useRegisterForm() {
  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  async function onSubmit(data: RegisterFormSchema) {
    const date = new Date(data.birthDate)

    const convertedDate = date.toISOString()

    try {
      await api.post('/user/create', {
        email: data.email,
        username: data.username,
        password: data.password,
        birthDate: convertedDate,
      })
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
