import { z } from 'zod'
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer, { Transporter } from 'nodemailer'

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
      await transporter.sendMail(mailOptions)
      res.status(200).json({ success: true })
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
