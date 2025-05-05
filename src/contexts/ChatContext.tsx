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
import { ChatType, Message } from '@/types'
import { getRoomId } from '@/utils/getRoomId'
import { getUsername } from '@/utils/getUsername'
import { socket } from '@/utils/socket'

type ChatContextType = {
  messages: Message[]
  username: string
  roomId: string
  activeChat: ChatType
  setActiveChat: Dispatch<SetStateAction<ChatType>>
  addMessage: (message: Message) => void
}

const ChatContext = createContext<ChatContextType | null>(null)

type Props = {
  children: ReactNode
}

export const ChatContextProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [roomId, setRoomId] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [activeChat, setActiveChat] = useState<ChatType>('text')

  const addMessage = (message: Message) => {
    setMessages((messages) => [...messages, message])
  }

  useEffect(() => {
    const roomId = getRoomId()
    const username = getUsername()
    setRoomId(roomId)
    setUsername(username)
    socket.emit('joinRoom', roomId)
    socket.on('message', addMessage)
    return () => {
      socket.disconnect()
    }
  }, [])

  const value = {
    messages,
    username,
    roomId,
    activeChat,
    setActiveChat,
    addMessage,
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
