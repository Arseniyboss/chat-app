'use client'

import styled from 'styled-components'
import { Circle } from '@/styles/globals'

type Props = {
  $textAreaHeight?: string
}

export const ChatContainer = styled.div`
  > :first-child {
    height: calc(100dvh - var(--header-height));
  }
`

export const TextChatContainer = styled.div<Props>`
  display: grid;
  grid-template-rows: 1fr calc(var(--textarea-height) + var(--spacing));
  position: relative;
  background: var(--darkgrey);
  color: var(--white);
`

export const TextChatMainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: 0 var(--spacing);
  padding-top: var(--spacing);
  overflow-y: auto;

  /* pushes header and messages to the bottom if they don't fill the entire height  */
  > :first-child {
    margin-top: auto;
  }
`

export const TextChatHeader = styled.header`
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

export const TextArea = styled.textarea`
  outline: none;
  border: none;
  resize: none;
  font-size: inherit;
  font-family: inherit;
  position: absolute;
  bottom: var(--spacing);
  background: var(--grey);
  color: var(--lightgrey);
  padding: 0.8rem 1rem;
  margin: 0 var(--spacing);
  width: calc(100% - (var(--spacing) * 2));
  max-height: 200px;
  border-radius: 0.25rem;

  &::placeholder {
    color: #6d6f78;
  }
`
