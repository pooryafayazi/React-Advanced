// __tests__\test-utils.jsx
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../src/styles/theme'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
