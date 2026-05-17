// src\app\products\[id]\ProductDetailPage.styles.js
import styled from 'styled-components'
import Link from 'next/link'

export const DetailContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1000px; // کمی عریض‌تر برای ظاهر بهتر در دسکتاپ
  margin: 0 auto;
  direction: rtl; // اطمینان از راست‌چین بودن کل کانتینر
`

export const BreadcrumbNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.font.sizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: #666;
`

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &::after {
    content: '/';
    margin: 0 8px;
    color: #ccc;
  }
  &:last-child::after {
    display: none;
  }
`

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; // در موبایل همه چیز وسط‌چین
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row; // در دسکتاپ کنار هم
    align-items: flex-start;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background-color: #f9f9f9; // یک پس‌زمینه ملایم برای وقتی عکس لود می‌شود
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  text-align: center;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    text-align: right;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.primary};
`

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.secondary};
`

export const ActionContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`

export const CartButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.3s ease;

  /* استفاده از علامت $ برای جلوگیری از نشت به DOM */
  background-color: ${({ $active, theme }) =>
    $active ? 'transparent' : theme.colors.primary};
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : 'white')};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ $active, theme }) =>
    $active ? '#fff0f0' : theme.colors.primaryHover};
    border-color: ${({ $active }) => ($active ? '#ff4d4d' : '')};
    color: ${({ $active }) => ($active ? '#ff4d4d' : '')};
  }
`
