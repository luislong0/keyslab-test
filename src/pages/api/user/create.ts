import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'

const bodySchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string().min(5, 'Insira uma senha com mais de 5 dígitos!'),
  birthDate: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { birthDate, email, password, username } = bodySchema.parse(req.body)

    try {
      const isUserInDatabase = await prisma.user.findFirst({
        where: {
          OR: [{ email }, { username }],
        },
      })

      if (isUserInDatabase) {
        return res.status(401).json({ Message: 'Usuário ja existente' })
      }

      const passwordHash = await hash(password, 6)

      await prisma.user.create({
        data: {
          email,
          passwordHash,
          username,
          birthDate,
        },
      })

      return res.status(201).json({ Message: 'Usuário criado com sucesso' })
    } catch (error) {
      console.error(error)
      return res.status(400).json({ Message: 'Erro ao criar usuário' })
    }
  }
}
