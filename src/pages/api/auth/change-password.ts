/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod'
import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'

const bodySchema = z.object({
  userEmail: z.string().email(),
  newPassword: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { newPassword, userEmail } = bodySchema.parse(req.body)

    const newPasswordHash = await hash(newPassword, 6)

    await prisma.user.update({
      where: { email: userEmail },
      data: { passwordHash: newPasswordHash },
    })

    res.status(200).json({ success: true })
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
