import { z } from 'zod'

// Schema para o o formulário
export const loginFormSchema = z.object({
  email: z.string().email('Digite um email correto'),
  password: z.string().min(5, 'Senha precisa de 5 caracteres'),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
