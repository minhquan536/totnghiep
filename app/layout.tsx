import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MinhQuan',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // return (
  // <ClerkProvider>
  //   <html lang="en">
  //     <body className={inter.className}>{children}</body>
  //   </html>
  // </ClerkProvider>
  // )
  return (
    <html lang="en">
      <CrispProvider/>
      <head>
        <title>Next.js 13 with Clerk</title>
      </head>
      <ClerkProvider>
      <body className={inter.className}>
        <ModalProvider/>
        <ToasterProvider/>
        {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
