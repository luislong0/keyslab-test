import { z } from 'zod'

// Schema para o o formulário
export const requestPasswordFormSchema = z.object({
  requestEmail: z.string().email(),
})

export type RequestPasswordFormSchema = z.infer<
  typeof requestPasswordFormSchema
>
