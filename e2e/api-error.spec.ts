// e2e\api-error.spec.ts
import { test, expect } from '@playwright/test'

test('در صورت بروز خطای ۵۰۰ در API محصولات، باید پیام مناسب به کاربر نمایش داده شود', async ({
  page,
}) => {
  // Intercept the API request and respond with a 500 error
  // page.on('request', (req) => {
  //   const url = req.url()
  //   if (url.includes('products')) {
  //     console.log('>> request:', req.method(), url)
  //   }
  // })

  // Listen for responses to log the status code and URL
  // page.on('response', (res) => {
  //   const url = res.url()
  //   if (url.includes('products')) {
  //     console.log('<< response:', res.status(), url)
  //   }
  // })

  await page.route('**/api/v1/products', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal Server Error' }),
    })
  })

  await page.goto('/products')

  // wait for console logs
  // await page.waitForTimeout(2000)
  // await expect(page.locator('body')).toBeVisible()

  await expect(page.getByTestId('error-message')).toBeVisible({
    timeout: 10000,
  })
})
