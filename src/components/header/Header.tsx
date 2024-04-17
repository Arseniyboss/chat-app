import { HeaderContainer, HeaderIcons } from './styles'
import ChatIcon from './chat-icon/ChatIcon'
import chats from '@/data/chats'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Chat App</h1>
      <HeaderIcons>
        {chats.map((chat, index) => (
          <ChatIcon key={index} {...chat} />
        ))}
      </HeaderIcons>
    </HeaderContainer>
  )
}

export default Header
