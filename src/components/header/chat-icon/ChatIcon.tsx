'use client'

import { useChatContext } from '@/contexts/ChatContext'
import { Chat } from '@/types'
import { Button } from '@/styles/globals'
import { IconContainer } from './styles'

const ChatIcon = ({ type, icon }: Chat) => {
  const { activeChat, setActiveChat } = useChatContext()
  const isActive = type === activeChat
  return (
    <IconContainer $isActive={isActive}>
      <Button aria-label={`${type} chat`} onClick={() => setActiveChat(type)}>
        {icon}
      </Button>
    </IconContainer>
  )
}

export default ChatIcon
