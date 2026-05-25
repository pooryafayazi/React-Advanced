// __tests__\NewsCard.test.js
import { render, screen } from './test-utils'
import NewsCard from '../src/components/News/NewsCard'
import '@testing-library/jest-dom'

const mockArticle = {
  title: 'تکنولوژی Next.js 15',
  description: 'بررسی قابلیت‌های جدید در آخرین نسخه فریم‌ورک محبوب ری‌اکت.',
  url: 'https://nextjs.org',
  image: 'https://nextjs.org/og.png',
  publishedAt: '2024-05-25T10:00:00Z',
  source: { name: 'Vercel' },
}

describe('NewsCard Component', () => {
  test('باید تایتل و دیسکریپشن خبر را رندر کند', () => {
    render(<NewsCard article={mockArticle} />)

    expect(screen.getByText(mockArticle.title)).toBeInTheDocument()

    expect(screen.getByText(mockArticle.description)).toBeInTheDocument()
  })

  test('دکمه ادامه مطلب باید به آدرس صحیح لینک شده باشد', () => {
    render(<NewsCard article={mockArticle} />)

    const link = screen.getByRole('link', { name: /ادامه مطلب/i })

    expect(link).toHaveAttribute('href', mockArticle.url)
  })

  test('باید تصویر خبر را با Alt Text صحیح نمایش دهد', () => {
    render(<NewsCard article={mockArticle} />)

    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('src', mockArticle.image)
    expect(image).toHaveAttribute('alt', mockArticle.title)
  })

  test('در صورت نبود تصویر، متن جایگزین No Image را نشان دهد', () => {
    const noImageArticle = { ...mockArticle, image: null }
    render(<NewsCard article={noImageArticle} />)

    // چک کردن متنی که در استایل‌دهی شرطی نوشتی
    expect(screen.getByText(/No Image/i)).toBeInTheDocument()
  })
})
