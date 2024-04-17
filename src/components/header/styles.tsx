'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 1;
  padding: 0 var(--spacing);
  height: var(--header-height);
  background: var(--darkgrey);
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 1.4rem;
    color: var(--white);
  }
`

export const HeaderIcons = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
