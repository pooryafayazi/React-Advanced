// src/components/News/NewsCard.stories.js
import React from 'react'
import NewsCard from './NewsCard'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'

export default {
  title: 'Components/News/NewsCard',
  component: NewsCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            padding: '3rem',
            maxWidth: '400px',
            backgroundColor: theme.colors.background,
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
}

const Template = (args) => <NewsCard {...args} />

export const Default = Template.bind({})
Default.args = {
  article: {
    title: 'تکنولوژی‌های جدید در دنیای گجت‌ها',
    description:
      'در این مقاله به بررسی آخرین دستاوردهای دنیای تکنولوژی و گجت‌های هوشمند در سال ۲۰۲۴ می‌پردازیم.',
    url: 'https://google.com',
    image: 'https://via.placeholder.com/600x400',
    publishedAt: '2024-05-20T10:00:00Z',
    source: { name: 'زومیت' },
  },
}

export const LongContent = Template.bind({})
LongContent.args = {
  article: {
    ...Default.args.article,
    title:
      'یک عنوان بسیار بسیار طولانی برای تست کردن اینکه آیا کامپوننت ما در برابر متن‌های چند خطی مقاوم است یا خیر',
    description:
      'این یک متن توضیحات بسیار طولانی است که برای تست کردن پایداری کارت اخبار در طراحی ریسپانسیو نوشته شده است. ما باید مطمئن شویم که کارت‌ها هم‌اندازه باقی می‌مانند و دکمه‌ها از کادر خارج نمی‌شوند.',
  },
}

export const NoImage = Template.bind({})
NoImage.args = {
  article: {
    ...Default.args.article,
    image: null,
  },
}
