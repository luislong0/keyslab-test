import { DefaultButton } from '@/components/Buttons/DefaultButton'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const session = useSession()
  const router = useRouter()

  function handleSignOut() {
    signOut()
    router.push('/auth/login')
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="max-w-sm flex flex-col items-center gap-5 w-full bg-zinc-800 p-5 rounded-md">
        <span className="w-full justify-center text-zinc-50 text-xl font-semibold flex">
          Olá{' '}
          <span className="text-blue-500">{session.data?.user.username}</span>!
        </span>

        <DefaultButton
          label={'Editar Perfil'}
          className="bg-blue-500 w-40 font-medium hover:bg-blue-400 transition-all"
        />
        <DefaultButton
          label={'Sair'}
          onClick={handleSignOut}
          className="bg-blue-500 w-40 font-medium hover:bg-blue-400 transition-all"
        />
      </div>
    </div>
  )
}
