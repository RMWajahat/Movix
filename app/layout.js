import './globals.css'
import { Poppins } from 'next/font/google'
import Nav from './components/nav'
import Footer from './components/footer'
const poppins = Poppins({ 
  weight:["200", "300","400","500","600","700"],
  subsets: ['latin'],
  display: 'swap'})

export const metadata = {
  title: 'Movix',
  description: 'Website to reach your favourite movies',
  icons:{ 
    icon: "/assets/favicon.ico"
      },
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={`${poppins.className} dark:bg-slate-900 bg-slate-100`}>
        <Nav/>
        {children}
        <Footer/>  
      </body>
    </html>
    </>
  )
}
