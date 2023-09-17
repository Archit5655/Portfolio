// import Header from '../components/Header'
import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Fredoka } from 'next/font/google'
import ToasterProvider from '@/providers/toasterprovider'
import Footer from '@/components/Footer'
import Darkmode from '@/components/Darkmode'
import ThemeContextProvider from '@/context/theme-context'
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
      <body className={`${inter.className}   bg-gray-200 text-gray-950  relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 `  }>
        <div className='bg-[#94a3b8] absolute top-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem]  -z-20 sm:w-[68rem]  dark:bg-[#808080]  '>

        </div>
        <div className='bg-[#4b5563] dark:bg-[#4C4C4C] absolute top-[-1rem] -z-20 left-[-35rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem]  '>

        </div>

        <ToasterProvider/>
        <ThemeContextProvider>


<Header/>

        {children}
<Darkmode/>

        </ThemeContextProvider>

      </body>
    </html>
  )
}
