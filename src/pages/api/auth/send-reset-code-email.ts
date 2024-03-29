/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod'
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, { Transporter } from 'nodemailer'
import { prisma } from '@/lib/prisma'

const bodySchema = z.object({
  email: z.string().email(),
  code: z.string().min(5).max(5),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { code, email } = bodySchema.parse(req.body)

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      port: parseInt(process.env.SMTP_PORT!),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: 'seuemail@example.com',
      to: email,
      subject: 'Código de Redefinição de Senha',
      text: `Seu código de redefinição de senha é: ${code}`,
    }

    try {
      if (!user) {
        return res.status(401).json({ Message: 'E-mail não cadastrado!' })
      } else {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ success: true })
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
