// src/components/News/NewsSkeleton.styles.js
'use client'
import styled, { keyframes } from 'styled-components'

const shimmerAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

const SkeletonBase = styled.div`
  // ایجاد بک‌گراند گرادینت برای ایجاد افکت نوری
  background: ${({ theme }) => theme.colors?.background || '#f6f7f8'};
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  // اتصال انیمیشن تعریف شده به کامپوننت
  animation: ${shimmerAnimation} 1.2s linear infinite forwards;
  border-radius: 8px;
`

export const SkeletonCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: 200px;
  border-radius: 0;
`

export const SkeletonText = styled(SkeletonBase)`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '20px'};
  margin-bottom: 10px;
`

export const SkeletonContent = styled.div`
  padding: ${({ theme }) => theme.spacing?.md || '1rem'};
`
