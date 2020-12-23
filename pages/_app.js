import Head from 'next/head'

import Navbar from '../components/navbar'
import { ReactComponent as Logo } from './images/logo.svg'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Steven Riggs | {Component.name}</title>
      </Head>

      <Logo alt='Chrysalis Logo' />

      <Navbar />
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
