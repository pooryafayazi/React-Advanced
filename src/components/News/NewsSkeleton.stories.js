// src\components\News\NewsSkeleton.stories.js
import React from 'react'
import NewsSkeleton from './NewsSkeleton'
import { Grid } from '../ProductList/ProductList.styles'

export default {
  title: 'Components/News/NewsSkeleton',
  component: NewsSkeleton,
}

export const SingleCard = () => <NewsSkeleton />

export const ListView = () => (
  <Grid>
    {[...Array(4)].map((_, index) => (
      <NewsSkeleton key={index} />
    ))}
  </Grid>
)

export const MobileView = () => <NewsSkeleton />
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
