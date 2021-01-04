import Head from 'next/head'

import Navbar from '../components/navbar'
import Logo from '../images/logoReact.svg'

import '../styles/globals.css'


function App({ Component, pageProps }) {
  console.log(Logo)
  return (
    <>
      <Head>
        <title>Steven Riggs | {Component.name}</title>
        <link rel='stylesheet' href='https: //fonts.googleapis.com/css2?family=Fugaz+One&display=swap' />
      </Head>

      <Logo />

      {/* <Navbar /> */}
      
      {/* <Component {...pageProps} /> */}
    </>
  )
}

export default App
