'use client'

import { KeyboardEvent, useState, useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { BsChatFill } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { useChatContext } from '@/contexts/ChatContext'
import { useAutoResizeTextArea } from '@/hooks/useAutosizeTextArea'
import { scrollToBottom } from '@/utils/scrollToBottom'
import { getCurrentDate } from '@/utils/getCurrentDate'
import { socket } from '@/utils/socket'
import { Button } from '@/styles/globals'
import {
  TextChatContainer,
  TextChatMainSection,
  TextChatHeader,
  IconContainer,
  TextAreaContainer,
  TextArea,
} from './styles'
import Message from '@/components/message/Message'

const TextChat = () => {
  const [messageInput, setMessageInput] = useState('')

  const chatSectionRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { username, messages, addMessage } = useChatContext()

  useAutoResizeTextArea(textareaRef, messageInput)

  useEffect(() => {
    scrollToBottom(chatSectionRef)
  }, [messages])

  const sendMessage = () => {
    const trimmedMessage = messageInput.trim()
    if (!trimmedMessage) return
    const currentDate = getCurrentDate()
    const message = { text: trimmedMessage, username, date: currentDate }
    socket.emit('message', message)
    addMessage(message)
    setMessageInput('')
  }

  const handleEnter = (e: KeyboardEvent) => {
    if (isMobile || e.key !== 'Enter' || e.shiftKey) return
    e.preventDefault()
    sendMessage()
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
      <TextAreaContainer>
        <TextArea
          placeholder="Message"
          value={messageInput}
          ref={textareaRef}
          rows={1}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleEnter}
          aria-label="enter your message"
        />
        <Button onClick={sendMessage}>
          <IoMdSend size={23} />
        </Button>
      </TextAreaContainer>
    </TextChatContainer>
  )
}

export default TextChat
