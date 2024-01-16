/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/lib/axios'
import { RegisterFormSchema } from './schema'
import axios from 'axios'
import { errorNotification } from '../Notifiers/Error'
import { useRouter } from 'next/router'
import { successNotification } from '../Notifiers/Success'

export function useRegisterForm() {
  const router = useRouter()
  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  async function onSubmit(data: RegisterFormSchema) {
    const date = new Date(data.birthDate)

    const convertedDate = date.toISOString()

    try {
      const response = await api.post('/user/create', {
        email: data.email,
        username: data.username,
        password: data.password,
        birthDate: convertedDate,
      })

      if (response.status === 201) {
        router.push('/auth/login')
        successNotification('Conta criada com sucesso')
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
