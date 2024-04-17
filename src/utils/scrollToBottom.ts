import { RefObject } from 'react'

export const scrollToBottom = <T extends HTMLElement>(ref: RefObject<T>) => {
  if (ref.current) {
    const chatSectionHeight = ref.current.scrollHeight
    ref.current.scrollTo(0, chatSectionHeight)
  }
}
