// e2e\cart-mocked.spec.ts
import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  // here we mock the API to always return a fixed data
  await page.route('**/products', async (route) => {
    const json = [
      { id: 1, title: 'محصول تست ۱', price: 1000 },
      { id: 2, title: 'محصول تست ۲', price: 2000 },
    ]
    await route.fulfill({ json })
  })
})

test('کاربر باید محصول ماک شده را ببیند', async ({ page }) => {
  await page.goto('/products')
  await expect(page.getByText('محصول تست ۱')).toBeVisible()
})
