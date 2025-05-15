import './globals.css'
import type { Metadata } from 'next'
import { Trispace } from 'next/font/google'
import { title } from 'process'

const trispace = Trispace({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AJ News',
  description: 'news for you where you can find everything what you need',
  icons: {
    icon:[{url:'/img/facivon-32x32.'},{url:'/img/facivon-16x16.png',sizes:'16'}],
    apple: {
      url:'/img/apple-touch-icon.png',
      sizes: '180x180',
    }
  },
  manifest: '/img/site.webmanifest',
  openGraph: {
    title: 'AJ News',
    description: 'news for you where you can find everything what you need',
    type: 'article',
    authors: 'Ahmad Julaib',
  },
  keywords:['AJ News','News','News about everything'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className='px-2 md:px-20'>
          {/* Header */}
          {/* Navbar */}
          <section className='flex justify-between'>
            {children}
            {/* RandomNews */}
          </section>
        </main>
      </body>
    </html>
  )
} 