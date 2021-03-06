import type { AppProps } from 'next/app'
import 'tailwind-preset-base/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
