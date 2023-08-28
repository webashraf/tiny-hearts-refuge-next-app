import type { Metadata } from 'next'
import NavBar from '../Components/Shared/NavBar/NavBar'
import FooterBottom from '../Components/Shared/FooterBottom/FooterBottom'
// import { Inter } from 'next/font/google'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='w-[1280px] mx-auto'>
      <NavBar />
      <div>{children}</div>
      <FooterBottom />
    </div>
  )
}
