import { Message as Props } from '@/types'
import { getUserInitials } from '@/utils/getUserInitials'
import {
  MessageContainer,
  UserAvatar,
  MessageContent,
  MessageGroup,
  MessageText,
} from './styles'

const Message = ({ username, date, text }: Props) => {
  const userInitials = getUserInitials(username)
  return (
    <MessageContainer>
      <UserAvatar>{userInitials}</UserAvatar>
      <MessageContent>
        <MessageGroup>
          <p>{username}</p>
          <p>{date}</p>
        </MessageGroup>
        <MessageText>{text}</MessageText>
      </MessageContent>
    </MessageContainer>
  )
}

export default Message
