// __tests__/DeliveryForm.test.jsx
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'
import DeliveryForm from '../src/components/Forms/DeliveryForm'

test('باید مقدار اینپوت‌ها درست ست شود', async () => {
  const user = userEvent.setup()
  render(<DeliveryForm />)

  const fullNameInput = screen.getByTestId('fullName-input')
  await user.type(fullNameInput, 'پوریا احمدی')

  expect(fullNameInput.value).toBe('پوریا احمدی')
})
