// src\components\ProductCard\ProductCard.styles.js
import styled from 'styled-components'

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 265px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;

  align-items: center; /* وسط‌چین افقی */
  justify-content: center; /*   عمودی  وسط  */
  text-align: center; /* برای متن/inline */
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`

export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const DetailsLink = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`
export const CartActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
`

export const SmallButton = styled.button`
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

export const QtyValue = styled.span`
  min-width: 20px;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`
