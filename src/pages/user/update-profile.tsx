import Image from 'next/image'
import keyslabSidebarImage from '../../assets/Sidebar.png'
import { AuthLayout } from '@/layouts/AuthLayout'
import { UpdateProfileForm } from '@/components/UpdateProfileForm'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { NextSeo } from 'next-seo'

export default function UpdateProfile() {
  return (
    <>
      <NextSeo title={'Atualizar informações | Keyslab'} noindex />
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
              <span className="text-[28px] text-zinc-50 font-semibold flex gap-2 items-center justify-between w-full">
                <Link href={'/'} className="hover:text-blue-500 transition-all">
                  <ChevronLeft size={28} fontWeight={700} />
                </Link>
                <span className="flex">Atualize suas informações</span>
                <div className="w-[1px]" />
              </span>

              <p className="text-md text-zinc-400 font-base max-w-[416px]">
                Renove suas informações pessoais! Atualize seus dados agora para
                mantermos tudo atualizado e personalizado para você.
              </p>

              <code className="text-xs text-zinc-600 font-base max-w-[416px]">
                * Para visualizar suas informações atualizadas, você precisa
                realizar o login novamente *
              </code>
            </div>

            <UpdateProfileForm />
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
