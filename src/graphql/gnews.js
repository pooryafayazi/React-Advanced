import { HttpsProxyAgent } from 'https-proxy-agent'

export async function fetchTopHeadlines({ lang = 'us', max = 10 }) {
  const baseUrl = process.env.GNEWS_BASE_URL
  const apiKey = process.env.GNEWS_API_KEY

  const url = `${baseUrl}/top-headlines?country=${lang}&pageSize=${max}`

  const response = await fetch(url, {
    headers: {
      'X-Api-Key': apiKey,
    },
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`NewsAPI Error: ${errorData.message}`)
  }

  return response.json()
}
