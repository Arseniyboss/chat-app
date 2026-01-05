import { ReactElement } from 'react'

export type ChatType = 'text' | 'audio' | 'video'

export type Chat = {
  icon: ReactElement
  type: ChatType
}

export type Message = {
  text: string
  username: string
  date: string
}
