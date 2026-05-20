// __tests__\Button.test.jsx
import { render, screen } from './test-utils'
import Button from '../src/components/ui/Button'

test('دکمه باید متن فرزند را رندر کند', () => {
  render(<Button>کلیک کن</Button>)
  expect(screen.getByText('کلیک کن')).toBeInTheDocument()
})

test('دکمه باید در حالت disabled غیرفعال باشد', () => {
  render(<Button disabled>دکمه غیرفعال</Button>)
  expect(screen.getByRole('button')).toBeDisabled()
})
