import { RefObject, useEffect } from 'react'

type Ref = RefObject<HTMLTextAreaElement | null>

export const useAutoResizeTextArea = (ref: Ref, resizeTrigger: string) => {
  const handleResize = () => {
    const textarea = ref.current
    if (!textarea) return
    textarea.style.height = 'auto' // adjusts height when deleting multiple lines of text
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [resizeTrigger])
}
