import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { montserrat, lato, poppins } from '../libs/fonts/fonts'
import BasicDetails from '../components/Modals/basicDetails';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} ${lato.variable} ${poppins.variable}`}>
      <SessionProvider session={pageProps.session}>
        <BasicDetails/>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )


}

export default MyApp
