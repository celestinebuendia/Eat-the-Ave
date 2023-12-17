import { Inter, Rock_Salt } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const rocksalt = Rock_Salt({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Eat The Ave',
  description: 'Celestine eats food on the Ave.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
