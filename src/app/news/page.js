// src/app/news/page.js
import { getClient } from '@/lib/apolloClient'
import { gql } from '@apollo/client'
import NewsList from '@/components/News/NewsList'
import * as T from '@/components/ui/Typography'

const GET_NEWS = gql`
  query GetTopHeadlines {
    topHeadlines(lang: "us", max: 12) {
      id
      title
      description
      url
      image
      publishedAt
    }
  }
`

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export default async function NewsPage() {
  const client = getClient()

  await delay(5000)

  let articles = []
  let error = null

  try {
    const { data } = await client.query({
      query: GET_NEWS,
      context: { fetchOptions: { cache: 'no-store' } },
    })
    articles = data?.topHeadlines || []
  } catch (e) {
    error = e
    console.error('Fetch Error:', e)
  }

  return (
    <main style={{ padding: '2rem' }}>
      <T.H1>آخرین اخبار جهان</T.H1>

      {error ? (
        <p style={{ color: 'red' }}>خطا در بارگیری اخبار</p>
      ) : (
        <NewsList articles={articles} />
      )}
    </main>
  )
}
