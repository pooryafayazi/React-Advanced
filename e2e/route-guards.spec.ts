// e2e\route-guards.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Route Guards', () => {
  ;(test('کاربر نباید بدون آیتم در سبد به صفحه delivery هدایت شود', async ({
    page,
  }) => {
    await page.goto('/checkout/delivery')
    await expect(page).toHaveURL(/cart/) // have to be redirected to cart
  }),
    test('کاربر نباید بدون پر کردن فرم delvery به صفحه payment برود', async ({
      page,
    }) => {
      await page.goto('/checkout/payment')
      // the same test can be done for delivery page, but since we don't have any form fields there,
      // we can just check if the user is redirected back to cart page when trying to access payment page directly without going through delivery page
      await expect(page).toHaveURL(/cart/) // have to be redirected to delivery page
    }))
})
