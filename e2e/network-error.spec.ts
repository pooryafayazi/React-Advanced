// e2e\network-error.spec.ts
import { test, expect } from '@playwright/test'

test('مدیریت خطای شبکه هنگام پرداخت', async ({ page }) => {
  // force a network error on checkout API
  await page.route('**/api/checkout', (route) =>
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ success: false }),
    })
  )

  await page.goto('/checkout/payment')
  // for filling the form, you can use valid test card details or any dummy data as the API will return an error anyway
  await page.getByTestId('cardNumber-input').fill('1234123412341234')
  await page.getByTestId('cvv2-input').fill('123')
  await page.getByTestId('expiry-input').fill('1405')

  await page.getByTestId('submit-payment-btn').click()

  // for verifying the error message display
  const errorMessage = page.getByTestId('error-message') // adjust the selector based on your actual error message element
  await expect(errorMessage).toBeVisible()
})
