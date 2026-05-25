// src\graphql\typeDefs.js
import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type NewsItem {
    id: ID!
    title: String!
    description: String
    url: String
    image: String
    publishedAt: String
  }

  type Query {
    topHeadlines(lang: String = "en", max: Int = 10): [NewsItem!]!
  }
`
