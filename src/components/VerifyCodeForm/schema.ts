import { z } from 'zod'

// Schema para o o formulário
export const verifyCodeFormSchema = z.object({
  code: z.string().min(5, 'Digite seu código de 5 dígitos'),
})

export type VerifyCodeFormSchema = z.infer<typeof verifyCodeFormSchema>
