// e2e\cart-persist.spec.ts
import { test, expect } from '@playwright/test'

test('سبد خرید بعد از رفرش صفحه باید باقی بماند', async ({ page }) => {
  await page.goto('/products')

  // add a product to the cart
  await page
    .getByRole('button', { name: /افزودن به سبد/i })
    .first()
    .click()

  await page.goto('/cart')

  const quantityElement = page.getByTestId('cart-quantity')

  await expect(quantityElement).toHaveText('1')

  // refresh
  await page.reload()

  // check if the cart quantity is still 1 after refresh
  await expect(page.getByTestId('cart-quantity')).toHaveText('1')
})
