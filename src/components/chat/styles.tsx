'use client'

import styled from 'styled-components'
import { Circle } from '@/styles/globals'

export const ChatContainer = styled.div`
  > :first-child {
    height: calc(100dvh - var(--header-height));
  }
`

export const TextChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--darkgrey);
  color: var(--white);
`

export const TextChatMainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: 0 var(--spacing);
  padding-top: var(--spacing);
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TextChatHeader = styled.header`
  margin-top: auto; /* pushes header and messages to the bottom if they don't fill the entire height  */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--white);

  h2 {
    font-size: 1.7rem;
  }
`

export const IconContainer = styled(Circle)`
  --size: 4rem;
  height: var(--size);
  width: var(--size);
  font-size: 2rem;
`

export const TextAreaContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  background: var(--grey);
  margin: 0 var(--spacing);
  margin-bottom: var(--spacing);
  padding-right: 1rem;
  border-radius: 0.25rem;
`

export const TextArea = styled.textarea`
  outline: none;
  border: none;
  resize: none;
  overflow-y: auto;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  max-height: 200px;
  line-height: 1.22;
  padding: 0.8rem;
  padding-left: 1rem;
  background: inherit;
  color: var(--lightgrey);

  &::placeholder {
    color: #6d6f78;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`
