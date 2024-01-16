import { z } from 'zod'

// Schema para o o formulário
export const registerFormSchema = z
  .object({
    username: z.string().min(1, 'Digite seu username'),
    email: z.string().email('Digite um email correto'),
    password: z.string().min(8, 'Senha precisa de 8 caracteres'),
    confirmPassword: z.string().min(8, 'Senha precisa de 8 caracteres'),
    birthDate: z.string().min(1, 'Selecione sua data de aniversário'),
  })
  // Verificação se a confirmação de senha é igual a senha
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
