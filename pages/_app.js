import Head from 'next/head'

import Navbar from '../components/navbar'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Steven Riggs | {Component.name}</title>
      </Head>

      <Navbar />
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
