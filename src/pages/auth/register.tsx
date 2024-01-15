import { AuthLayout } from '@/layouts/AuthLayout'
import { RegisterForm } from '@/components/RegisterForm'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import keyslabSidebarImage from '../../assets/Sidebar.png'
import Image from 'next/image'

export default function Register() {
  return (
    <AuthLayout>
      <div className="max-h-[820px] w-full mx-auto flex items-center">
        <Image
          src={keyslabSidebarImage}
          width={450}
          height={820}
          alt="Sidebar Image"
          quality={100}
          className="rounded-md hidden lg:flex"
        />

        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-1 items-center max-w-sm">
              <span className="text-[28px] text-zinc-50 font-semibold flex gap-2 items-center justify-between w-full">
                <Link
                  href={'/auth/login'}
                  className="hover:text-blue-500 transition-all"
                >
                  <ChevronLeft size={28} fontWeight={700} />
                </Link>
                <span className="flex -ml-2">Crie sua conta</span>
                <div className="w-[1px]" />
              </span>
              <span className="text-base text-zinc-400">
                Registre-se para comprar, vender e explorar o vibrante mercado
                de contas e itens de jogos
              </span>
            </div>
          </div>

          <RegisterForm />
        </div>
      </div>
    </AuthLayout>
  )
}
