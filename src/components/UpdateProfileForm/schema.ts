import { z } from 'zod'

// Schema para o o formulário
export const updateProfileFormSchema = z.object({
  username: z.string().min(1, 'Digite seu username'),
  email: z.string().email('Digite um email correto'),
})

export type UpdateProfileFormSchema = z.infer<typeof updateProfileFormSchema>
