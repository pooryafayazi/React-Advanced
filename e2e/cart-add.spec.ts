// e2e\cart-add.spec.ts
import { test, expect } from '@playwright/test'

test('کاربر بتواند محصول را به سبد اضافه کند و همان محصول در سبد دیده شود', async ({
  page,
}) => {
  await page.goto('/products')
  await page
    .getByRole('button', { name: /افزودن به سبد/i })
    .first()
    .click()
  await page.goto('/cart')

  // const buttons = await page.locator('button').allTextContents()
  // console.log('تمام دکمه‌های صفحه:', buttons)

  await page.locator('button:has-text("➕")').first().click()

  // const cartContent = await page.locator('body').innerText()
  // console.log('محتوای کل صفحه سبد خرید:', cartContent)

  // await expect(page.locator('div:has-text("2")').last()).toBeVisible()

  const quantityElement = page.getByTestId('cart-quantity')
  await expect(quantityElement).toHaveText('2')
})
