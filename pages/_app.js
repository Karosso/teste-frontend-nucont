import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    ReactGA.initialize('UA-179009574-1');

    ReactGA.pageview(window.location.pathname + window.location.search);

  }, [])

  return <Component {...pageProps} />
}

export default MyApp