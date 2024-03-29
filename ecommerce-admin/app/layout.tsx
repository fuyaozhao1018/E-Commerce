import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-providers'
import prismadb from '@/lib/prismadb'
import { ToastProvider } from '@/providers/toast-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const store = prismadb.store
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>
        <ModalProvider/>
        {children}</body>
    </html>
    </ClerkProvider>
  )
}
