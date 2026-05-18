// src\components\layout\Providers.js
'use client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@/styles/theme'

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
