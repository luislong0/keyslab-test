import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const bodySchema = z.object({
  email: z.string().email(),
  username: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'PUT') {
    const { email, username } = bodySchema.parse(req.body)

    try {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          email,
          username,
        },
      })

      return res.status(200).json({ Message: 'Usuário atualizado com sucesso' })
    } catch (error) {
      console.error(error)
      return res.status(400).json({ Message: 'Erro ao atualizar usuário' })
    }
  }
}
