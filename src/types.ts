export type ChatType = 'text' | 'audio' | 'video'

export type Chat = {
  icon: JSX.Element
  type: ChatType
}

export type Message = {
  text: string
  username: string
  date: string
}
