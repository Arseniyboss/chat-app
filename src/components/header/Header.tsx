import { HeaderContainer, IconWrapper } from './styles'
import ChatIcon from './chat-icon/ChatIcon'
import chats from '@/data/chats'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Chat App</h1>
      <IconWrapper>
        {chats.map((chat, index) => (
          <ChatIcon key={index} {...chat} />
        ))}
      </IconWrapper>
    </HeaderContainer>
  )
}

export default Header
