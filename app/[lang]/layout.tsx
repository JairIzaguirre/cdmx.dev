import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import Navbar from '@/components/Navbar'
import { getDictionary } from '@/app/dictionaries'

const inter = Inter({ subsets: ['latin'] })


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'es')

  return {
    title: lang === 'en'
      ? 'ecommerce.cdmx.dev | Next Generation E-Commerce'
      : 'ecommerce.cdmx.dev | E-Commerce de Próxima Generación',
    description: lang === 'en'
      ? 'We build cloud e-commerce platforms using cutting-edge technologies.'
      : 'Construimos plataformas de comercio electrónico en la nube utilizando tecnologías de vanguardia.',
    keywords: 'ecommerce, web development, next.js, react, online store, cdmx',
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'es')

  return (
    <html lang={lang}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TLCNRE770K"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TLCNRE770K');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar dict={dict.navbar} />
        <main>{children}</main>
      </body>
    </html>
  )
}