// src/components/News/NewsCard.js
'use client'
import React from 'react'
import {
  Card,
  ImageWrapper,
  NewsImage,
  Content,
  DateText,
  Title,
  Description,
  ReadMoreLink,
} from './NewsCard.styles'

export default function NewsCard({ article }) {
  if (!article) return null

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    'fa-IR'
  )

  return (
    <Card>
      <ImageWrapper>
        {article.image ? (
          <NewsImage src={article.image} alt={article.title} />
        ) : (
          <div
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ccc',
            }}
          >
            No Image
          </div>
        )}
      </ImageWrapper>

      <Content>
        <DateText>{formattedDate}</DateText>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>

        <ReadMoreLink
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          ادامه مطلب...
        </ReadMoreLink>
      </Content>
    </Card>
  )
}
