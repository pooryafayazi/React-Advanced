// __tests__/PaymentForm.test.jsx
import { render, screen, waitFor } from './test-utils'
import userEvent from '@testing-library/user-event'
import PaymentForm from '../src/components/Forms/PaymentForm'

test('در صورت موفق بودن پرداخت باید سبد خرید پاک شود', async () => {
  const user = userEvent.setup()
  const { store } = render(<PaymentForm />)

  await user.click(screen.getByTestId('submit-payment-btn'))

  await waitFor(() => {
    expect(store.getState().cart.items).toHaveLength(0)
  })
})
