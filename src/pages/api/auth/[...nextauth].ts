/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials, req): Promise<any> {
        const userResponse = await prisma.user.findUnique({
          where: { email: credentials!.email },
        })

        if (!userResponse) {
          throw new Error('Usuário não encontrado')
        }

        const isValidPassword = await compare(
          credentials!.password,
          userResponse.passwordHash!,
        )

        if (!isValidPassword) {
          throw new Error('Credenciais inválidas')
        }

        const user = {
          user: {
            id: userResponse.id,
            username: userResponse.username,
            email: userResponse.email,
            userRole: userResponse.role,
          },
          // ... outros campos do usuário
        }

        return user
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    },
  },
})
