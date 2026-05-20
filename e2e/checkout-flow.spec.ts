// e2e\checkout-flow.spec.ts
import { test, expect } from '@playwright/test'

test('کاربر باید بتواند مسیر کامل خرید را طی کند', async ({ page }) => {
  // mock checkout API to always succeed for this test
  await page.route('**/api/checkout', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    })
  )
  await page.goto('/products')
  await page
    .getByRole('button', { name: /افزودن به سبد/i })
    .first()
    .click()
  await page.goto('/cart')

  await page.getByTestId('go-to-delivery-btn').click()
  await expect(page).toHaveURL(/checkout\/delivery/)

  await page.getByTestId('fullName-input').fill('پوریا فیاضی')
  await page.getByTestId('phone-input').fill('09123456789')
  await page.getByTestId('city-input').fill('تهران')
  await page.getByTestId('address-input').fill('تهران، خیابان مهندسین')
  await page.getByTestId('postalCode-input').fill('1234123423')
  await page.getByTestId('submit-delivery-btn').click()
  await expect(page).toHaveURL(/checkout\/payment/)

  await page.getByTestId('cardNumber-input').fill('1234567812345678')
  await page.getByTestId('cvv2-input').fill('1238')
  await page.getByTestId('expiry-input').fill('1405')
  await page.getByTestId('submit-payment-btn').click()

  await expect(page).toHaveURL(/checkout\/success/)
  await expect(page.getByText(/سفارش شما با موفقیت ثبت شد/i)).toBeVisible()
})
