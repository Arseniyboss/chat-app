'use client'

import { KeyboardEvent, useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'
import { BsChatFill } from 'react-icons/bs'
import { useChatContext } from '@/contexts/ChatContext'
import { useAutoResizeTextarea } from '@/hooks/useAutosizeTextArea'
import { scrollToBottom } from '@/utils/scrollToBottom'
import { getCurrentDate } from '@/utils/getCurrentDate'
import {
  TextChatContainer,
  TextChatMainSection,
  TextChatHeader,
  IconContainer,
  TextArea,
} from './styles'
import Message from '@/components/message/Message'

const TextChat = () => {
  const [message, setMessage] = useState('')

  const chatSectionRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { username, messages } = useChatContext()

  useAutoResizeTextarea(textareaRef, message)

  useEffect(() => {
    scrollToBottom(chatSectionRef)
  }, [messages])

  const handleEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (!message) return
    const currentDate = getCurrentDate()
    const socket = io()
    socket.emit('message', { message, username, date: currentDate })
    setMessage('')
  }
  return (
    <TextChatContainer>
      <TextChatMainSection ref={chatSectionRef}>
        <TextChatHeader>
          <IconContainer>
            <BsChatFill />
          </IconContainer>
          <h2>Welcome to text chat</h2>
          <p>This is the start of the text chat</p>
        </TextChatHeader>
        <ul>
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
        </ul>
      </TextChatMainSection>
      <TextArea
        placeholder='Message'
        value={message}
        ref={textareaRef}
        rows={1}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnter}
        aria-label='enter your message'
      />
    </TextChatContainer>
  )
}

export default TextChat
