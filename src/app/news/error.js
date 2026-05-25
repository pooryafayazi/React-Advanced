// src/app/news/error.js
'use client'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as T from '@/components/ui/Typography'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  padding: 2rem;
  background: rgba(255, 77, 77, 0.05);
  border-radius: 16px;
  border: 1px dashed #ff4d4d;
  margin: 2rem;
`

const RetryButton = styled.button`
  background: #d4af37;
  color: #111;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    background: #b8962d;
    transform: scale(1.05);
  }
`

export default function NewsError({ error, reset }) {
  useEffect(() => {
    console.error('News Page Error:', error)
  }, [error])

  return (
    <ErrorContainer>
      <T.H2>اوپس! مشکلی در دریافت اخبار پیش آمد</T.H2>
      <T.P color="#666">
        {error.message ||
          'متأسفانه نتوانستیم ارتباط با سرور اخبار برقرار کنیم.'}
      </T.P>

      <RetryButton onClick={() => reset()}>تلاش مجدد 🔄</RetryButton>
    </ErrorContainer>
  )
}
