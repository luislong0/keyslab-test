import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface User {
    id: string
    username: string
    email: string
    userRole: string
  }

  interface Session {
    user: User
  }
}
