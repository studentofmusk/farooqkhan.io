import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Farooq Khan | PORTFOLIO',
  description: 'this is a full stack developer portfolio',
  themeColor:'#333647'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#333647]' >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
