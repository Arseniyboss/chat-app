import { FaMicrophone } from 'react-icons/fa'
import { BsCameraVideoFill, BsChatFill } from 'react-icons/bs'
import { Chat } from '@/types'

export const chats: Chat[] = [
  { type: 'text', icon: <BsChatFill /> },
  { type: 'audio', icon: <FaMicrophone /> },
  { type: 'video', icon: <BsCameraVideoFill /> },
]

export default chats
