'use client'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/context/Context'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

const rubik = Rubik({
  weight:['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})


// export const metadata: Metadata = {
//   title: 'StacFx',
//   description: 'Learn and get better at industry trading secrets',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Provider store={store}>
        <GlobalContextProvider >
          {children}
        </GlobalContextProvider>
        </Provider>
      </body>
    </html>
  )
}