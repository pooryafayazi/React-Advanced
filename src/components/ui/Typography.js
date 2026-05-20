// src\components\ui\Typography.js
'use client'
import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
  color: ${({ theme }) => {
    return theme.colors.text
  }};
`

export const H2 = styled.h2`
  font-size: 1.9rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
`

export const H3 = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`

export const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.text};
`

export const H5 = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text};
`

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Muted = styled.p`
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.9rem;
  line-height: 1.7;
`
export const B = styled.b`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`
