import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The English portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar/>
          <div id='content' className='mx-5 pt-20 sm:mx-20'>
            {children}
          </div>
        </body>
    </html>
  )
}
