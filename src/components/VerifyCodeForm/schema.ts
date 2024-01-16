import { z } from 'zod'

// Schema para o o formulário
export const verifyCodeFormSchema = z.object({
  code: z.string(),
})

export type VerifyCodeFormSchema = z.infer<typeof verifyCodeFormSchema>
