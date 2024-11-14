import { RefObject } from 'react'

export const scrollToBottom = <T extends HTMLElement>(ref: RefObject<T>) => {
  const chatSection = ref.current
  if (!chatSection) return
  chatSection.scrollTo(0, chatSection.scrollHeight)
}
