import { Inter } from 'next/font/google'
import './globals.css'
import Container from './components/Container'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eat The Ave',
  description: 'Celestine eats food on the Ave.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
