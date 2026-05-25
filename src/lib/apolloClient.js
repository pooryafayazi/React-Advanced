// src\lib\apolloClient.js
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/client-integration-nextjs'

export const { getClient } = registerApolloClient(() => {
  const API_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/graphql'
      : 'https://domain.com/api/graphql'

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: API_URL,
      fetchOptions: { cache: 'no-store' },
    }),
  })
})
