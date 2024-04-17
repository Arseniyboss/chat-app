export type ChatType = 'text' | 'audio' | 'video'

export type Chat = {
  icon: JSX.Element
  type: ChatType
}

export type Message = {
  username: string
  text: string
  date: string
}

export type SocketData = {
  message: string
  username: string
  date: string
}
