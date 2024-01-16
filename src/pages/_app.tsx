import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DefaultSeo } from 'next-seo'

// Configuração das fontes
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    // Provedor de sessão do usuário
    <SessionProvider session={session}>
      <main className={`${inter.className} antialiased`}>
        <Component {...pageProps} />
        {/* Configuração do Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Configuração do SEO */}
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://keyslab-test.vercel.app',
            siteName: 'Keyslab',
          }}
        />
      </main>
    </SessionProvider>
  )
}
