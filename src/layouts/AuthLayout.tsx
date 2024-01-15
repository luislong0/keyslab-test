import { Container } from '@/components/Container'
import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-w-[100vw]">
      <Container className="h-screen mx-auto flex flex-col justify-center items-center px-5">
        <div className="max-h-[820px] w-full mx-auto flex gap-8 items-center">
          {children}
        </div>
      </Container>
    </main>
  )
}
