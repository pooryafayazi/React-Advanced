// e2e\cart.spec.ts
import { test, expect } from '@playwright/test'

test('کاربر بتواند محصول را به سبد اضافه کند و همان محصول در سبد دیده شود', async ({
  page,
}) => {
  await page.goto('/products')
  // add the first product to the cart and then check if the product is in the cart page or not with the same title
  const firstProductTitle = await page.locator('h3').first().innerText()

  // click on the add to cart button of the first product
  await page
    .getByRole('button', { name: /افزودن به سبد/i })
    .first()
    .click()

  // go to the cart page
  await page.goto('/cart')

  // check if the product is in the cart page or not with the same title
  await expect(page.getByText(firstProductTitle)).toBeVisible()
})
