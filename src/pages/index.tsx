import { DefaultButton } from '@/components/Buttons/DefaultButton'
import { successNotification } from '@/components/Notifiers/Success'
import { signOut, useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const session = useSession()
  const router = useRouter()

  function handleSignOut() {
    signOut({
      redirect: false,
    })
    router.push('/auth/login')
    successNotification('Você saiu da aplicação')
  }

  return (
    <>
      <NextSeo title={'Home | Keyslab'} noindex />

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="max-w-sm flex flex-col items-center gap-5 w-full bg-zinc-800 p-10 rounded-3xl">
          <span className="w-full justify-center text-zinc-50 text-xl font-semibold flex">
            Olá{' '}
            <span className="text-blue-500 ml-2">
              {session.data?.user.username}
            </span>
            !
          </span>

          <Link
            href={'/user/update-profile'}
            className="bg-blue-500 w-40 font-medium hover:bg-blue-400 transition-all flex justify-center text-center rounded-full p-4 text-sm"
          >
            Editar Perfil
          </Link>
          <DefaultButton
            label={'Sair'}
            onClick={handleSignOut}
            className="bg-blue-500 w-40 font-medium hover:bg-blue-400 transition-all"
          />
        </div>
      </div>
    </>
  )
}
