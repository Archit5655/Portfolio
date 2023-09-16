import Header from '../components/Header'
import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Fredoka } from 'next/font/google'
// import Intro from '@/components/Intro'

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

    <html lang="en" className=' '>
      <body className={`${inter.className}  bg-gray-200 text-gray-950  relative pt-28 sm:pt-36 `  }>
        <div className='bg-[#94a3b8] absolute top-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem]  -z-20 sm:w-[68rem]  '>

        </div>
        <div className='bg-[#4b5563] absolute top-[-1rem] -z-20 left-[-35rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] '>

        </div>

        
<Header/>

        {children}


      </body>
    </html>
  )
}
