// src/components/News/NewsList.js
'use client'
import React from 'react'
import NewsCard from './NewsCard'
import { Grid } from '@/components/ProductList/ProductList.styles'

export default function NewsList({ articles }) {
  return (
    <Grid>
      {articles.map((article, index) => (
        <NewsCard key={article.id || index} article={article} />
      ))}
    </Grid>
  )
}
