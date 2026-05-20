// e2e\cart-delete.spec.ts
import { test, expect } from '@playwright/test'

test('کاربر بتواند محصول را از سبد حذف کند و دیگر آن محصول در سبد دیده نشود', async ({
  page,
}) => {
  await page.goto('/products')
  await page
    .getByRole('button', { name: /افزودن به سبد/i })
    .first()
    .click()
  await page.goto('/cart')

  await page.getByTestId('remove-button').click()

  const quantityElement = page.getByTestId('cart-quantity')
  await expect(quantityElement).not.toBeVisible()

  await expect(page.getByTestId('cart-item')).toHaveCount(0)
  await expect(page.getByText(/سبد خرید شما خالی است/i)).toBeVisible()
})
