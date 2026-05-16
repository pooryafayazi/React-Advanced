'use client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/theme'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
