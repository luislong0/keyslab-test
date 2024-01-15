import { AuthLayout } from '@/layouts/AuthLayout'
import Image from 'next/image'
import profileLoginImage from '../../assets/profile-login-img.png'
import { LoginForm } from '@/components/LoginForm'

import keyslabSidebarImage from '../../assets/Sidebar.png'

export default function Login() {
  return (
    <AuthLayout>
      <div className="max-h-[820px] w-full mx-auto flex items-center">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-8">
            <span className="text-[28px] text-zinc-50 font-semibold">
              Entrar na conta
            </span>
            <Image
              className="bg-zinc-900 rounded-full"
              src={profileLoginImage}
              alt="Profile Image "
              quality={100}
            />
          </div>

          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  )
}
