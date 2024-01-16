import { z } from 'zod'

export const changePasswordFormSchema = z
  .object({
    newPassword: z.string().min(8, 'Senha precisa de 8 caracteres'),
    confirmNewPassword: z.string().min(8, 'Senha precisa de 8 caracteres'),
  })
  // Verificação se a confirmação da nova senha é igual a nova senha digitada
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'As novas senhas não coincidem',
    path: ['confirmNewPassword'],
  })

export type ChangePasswordFormSchema = z.infer<typeof changePasswordFormSchema>
