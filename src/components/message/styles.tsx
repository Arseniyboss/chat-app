'use client'

import styled from 'styled-components'
import { Circle } from '@/styles/globals'

export const MessageContainer = styled.li`
  display: flex;
  gap: 0.7rem;
  margin-bottom: var(--spacing);
`

export const UserAvatar = styled(Circle)`
  --size: 2.8rem;
  height: var(--size);
  width: var(--size);
  font-size: 1rem;
`

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 80%;

  p:not(:first-child) {
    font-size: 0.85rem;
  }
`

export const MessageGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p:first-child {
    color: var(--white);
  }

  p:last-child {
    color: var(--lightgrey);
  }
`

export const MessageText = styled.p`
  color: var(--lightgrey);
  word-wrap: break-word;
`
