import { Container } from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import keyslabSidebarImage from '../assets/Sidebar.png'

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-w-[100vw]">
      <Container className="min-h-screen mx-auto flex flex-col justify-center items-center px-5">
        <div className="max-h-[820px] w-full mx-auto flex items-center">
          <Image
            src={keyslabSidebarImage}
            width={450}
            height={820}
            alt="Sidebar Image"
            quality={100}
            className="flex-1"
          />
          {children}
        </div>
      </Container>
    </main>
  )
}
