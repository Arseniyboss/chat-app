'use client'

import { useChatContext } from '@/contexts/ChatContext'
import { ChatContainer } from './styles'
import TextChat from './TextChat'
import MediaRoom from './MediaRoom'

const Chat = () => {
  const { activeChat } = useChatContext()
  return (
    <ChatContainer>
      {activeChat === 'text' && <TextChat />}
      {activeChat === 'audio' && <MediaRoom audio={true} video={false} />}
      {activeChat === 'video' && <MediaRoom audio={true} video={true} />}
    </ChatContainer>
  )
}

export default Chat
