// src/app/news/loading.js
'use client'
import React from 'react'
import NewsSkeleton from '@/components/News/NewsSkeleton'
import { Grid } from '@/components/ProductList/ProductList.styles'
import * as T from '@/components/ui/Typography'

export default function NewsLoading() {
  return (
    <main style={{ padding: '2rem' }}>
      <T.H1>در حال دریافت آخرین اخبار...</T.H1>

      <Grid>
        {[...Array(8)].map((_, i) => (
          <NewsSkeleton key={i} />
        ))}
      </Grid>
    </main>
  )
}
