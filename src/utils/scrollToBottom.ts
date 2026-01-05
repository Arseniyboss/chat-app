import { RefObject } from 'react'

export const scrollToBottom = <T extends HTMLElement | null>(ref: RefObject<T>) => {
  const chatSection = ref.current
  if (!chatSection) return
  chatSection.scrollTo(0, chatSection.scrollHeight)
}
