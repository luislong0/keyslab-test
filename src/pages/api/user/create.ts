import { z } from 'zod'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next'

export async function POST(request: Request) {
  const bodySchema = z.object({
    email: z.string(),
    username: z.string(),
    password: z.string().min(8, 'Insira uma senha com mais de 8 dígitos!'),
    birthDate: z.string(),
  })

  if (request.method !== 'POST') {
    NextResponse.json(
      { error: 'Invalid Method' },
      {
        status: 405,
      },
    )
  }

  const data = await request.json()
  const { email, birthDate, username, password } = bodySchema.parse(data)

  try {
    const isUserInDatabase = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    })

    console.log(isUserInDatabase)

    if (isUserInDatabase) {
      return NextResponse.json(
        { error: 'Usuário ja existente' },
        {
          status: 401,
        },
      )
    }

    const passwordHash = await hash(password, 6)

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        username,
        birthDate,
      },
    })

    return NextResponse.json(
      {
        user,
      },
      {
        status: 201,
      },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        error: 'Erro ao criar usuario',
      },
      {
        status: 400,
      },
    )
  }
}

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

      console.log(isUserInDatabase)

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
