import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ecommerce.cdmx.dev | E-Commerce de Próxima Generación',
  description: 'Construimos plataformas de comercio electrónico en la nube utilizando tecnologías de vanguardia.',
  keywords: 'ecommerce, desarrollo web, next.js, react, tienda online, cdmx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}