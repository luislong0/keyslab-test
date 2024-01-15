/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginFormSchema } from './schema'

export function useLoginForm() {
  // Funções para fazer o submit do formulário e função quando da erro no submit do formulário
  function onSubmit(data: LoginFormSchema) {
    console.log(data)
  }

  function onSubmitError(err: any) {
    console.log(err)
  }

  return {
    onSubmit,
    onSubmitError,
  }
}
