import Image from 'next/image'
import profileLoginImage from '../../assets/keyslab_logo.jpg'
import { LoginForm } from '@/components/LoginForm'
import keyslabSidebarImage from '../../assets/Sidebar.png'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NextSeo } from 'next-seo'

export default function Login() {
  return (
    <>
      <NextSeo
        title="Login | Keyslab"
        description="Entre nesse mundo mágico dos games!!"
      />

      <AuthLayout>
        <div className="w-full mx-auto flex items-center px-5 lg:px-0">
          <Image
            src={keyslabSidebarImage}
            width={450}
            height={820}
            alt="Sidebar Image"
            quality={100}
            className="rounded-none 2xl:rounded-md hidden h-screen 2xl:h-full lg:flex"
          />

          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-8">
              <span className="text-[28px] text-zinc-50 font-semibold">
                Entrar na conta
              </span>
              <Image
                className="bg-zinc-900 rounded-full"
                src={profileLoginImage}
                alt="Profile Image "
                width={120}
                height={120}
                quality={100}
              />
            </div>

            <LoginForm />
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
