import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Fredoka } from 'next/font/google'

const inter = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Archit-Works',
  description: 'Archit garg  portfolio website',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      <body className={`${inter.className}  bg-red-100 text-gray-950  relative` }>
        <div className='bg-[#e9d5ff] absolute top-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem]  -z-20 sm:w-[68rem] '>

        </div>
        <div className='bg-[#e9d5ff] absolute top-[-1rem] -z-20 left-[-35rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] '>

        </div>
<Header/>
        {children}


      </body>
    </html>
  )
}
