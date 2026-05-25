// src/components/News/NewsSkeleton.js
'use client'
import React from 'react'
import * as S from './NewsSkeleton.styles'

export default function NewsSkeleton() {
  return (
    <S.SkeletonCard>
      <S.SkeletonImage />

      <S.SkeletonContent>
        <S.SkeletonText width="30%" height="12px" />
        <S.SkeletonText width="90%" height="24px" />
        <S.SkeletonText width="100%" height="16px" />
        <S.SkeletonText width="70%" height="16px" />
      </S.SkeletonContent>
    </S.SkeletonCard>
  )
}
