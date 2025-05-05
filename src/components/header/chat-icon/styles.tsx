'use client'

import styled from 'styled-components'

type Props = {
  $isActive: boolean
}

export const IconContainer = styled.li<Props>`
  color: ${({ $isActive }) => ($isActive ? 'white' : '#b5bac1')};
  font-size: 1.4rem;
  display: inherit;

  &:hover {
    color: white;
  }
`
