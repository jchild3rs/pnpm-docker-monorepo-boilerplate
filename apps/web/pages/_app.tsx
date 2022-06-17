import '../styles/global.css'
import type { AppProps } from 'next/app'
import Header from '../components/header.client'

export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  console.log('test')
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
