// __tests__\Button.test.jsx
import { render, screen } from '@testing-library/react'
import Button from '../src/components/ui/Button'
import { ThemeProvider } from 'styled-components'

const theme = {
  font: {
    family: 'sans-serif',
    weight: { bold: 700 },
    sizes: { base: '16px', small: '12px', large: '20px' },
  },
  radius: { md: '8px' },
  colors: { primary: '#0070f3' },
}

test('دکمه باید متن فرزند را رندر کند', () => {
  render(
    <ThemeProvider theme={theme}>
      <Button>کلیک کن</Button>
    </ThemeProvider>
  )
  expect(screen.getByText('کلیک کن')).toBeInTheDocument()
})

test('دکمه باید در حالت disabled غیرفعال باشد', () => {
  render(
    <ThemeProvider theme={theme}>
      <Button disabled>دکمه غیرفعال</Button>
    </ThemeProvider>
  )
  expect(screen.getByRole('button')).toBeDisabled()
})
