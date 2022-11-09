import '../styles/globals.css'
import PrefectureContextProvider from '@/context/PrefectureContext'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [prefectureList, setPrefectureList] = useState([])
  return (
    <PrefectureContextProvider>
      <Component {...pageProps} />
    </PrefectureContextProvider>
  )
}
