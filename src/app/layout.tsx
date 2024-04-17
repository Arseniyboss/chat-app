import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChatContextProvider } from '@/contexts/ChatContext'
import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/header/Header'

type Props = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'Chat app built with NextJS',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ChatContextProvider>
            <Header />
            <main>{children}</main>
          </ChatContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
