import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
<link rel="icon" href="/favicon.ico" sizes="any" />



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:  'Portfolio Website Nayan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}