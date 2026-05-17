// src\components\home\HomeBackground.js
'use client'

import { BackgroundWrapper, Overlay, Content } from './HomeBackground.styles'

export default function HomeBackground({ children }) {
  return (
    <BackgroundWrapper>
      <Overlay />
      <Content>{children}</Content>
    </BackgroundWrapper>
  )
}
