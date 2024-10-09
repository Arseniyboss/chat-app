'use client'

import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react'
import { io } from 'socket.io-client'
import { ChatType, Message } from '@/types'
import { getUsername } from '@/utils/getUsername'

type ChatContextType = {
  messages: Message[]
  username: string
  activeChat: ChatType
  setActiveChat: Dispatch<SetStateAction<ChatType>>
}

const ChatContext = createContext<ChatContextType | null>(null)

type Props = {
  children: ReactNode
}

export const ChatContextProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [username, setUsername] = useState<string>('')
  const [activeChat, setActiveChat] = useState<ChatType>('text')

  useEffect(() => {
    const socket = io()
    socket.on('message', (message: Message) => {
      setMessages((messages) => [...messages, message])
    })
    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    const username = getUsername()
    setUsername(username)
  }, [])

  const value = {
    messages,
    username,
    activeChat,
    setActiveChat,
  }
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export const useChatContext = () => {
  const context = useContext(ChatContext)

  if (!context) {
    throw new Error('useChatContext must be used within ChatContextProvider')
  }

  return context
}
