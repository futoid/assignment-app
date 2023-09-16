import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { montserrat, lato, poppins, figtree } from '../libs/fonts/fonts'
import BasicDetails from '../components/Modals/basicDetails';
import SocialDetails from '../components/Modals/socialDetails';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} ${lato.variable} ${poppins.variable} ${figtree.variable}`}>
      <SessionProvider session={pageProps.session}>
        <BasicDetails/>
        <SocialDetails/>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )


}

export default MyApp
