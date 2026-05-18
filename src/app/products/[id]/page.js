// src\app\products\[id]\page.js
'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { products } from '@/data/products'
import Image from 'next/image'
import * as T from '@/components/ui/Typography'
import {
  DetailContainer,
  MainSection,
  ImageWrapper,
  ContentWrapper,
  Title,
  Price,
  BreadcrumbNav,
  BreadcrumbLink,
  ActionContainer,
  CartButton,
} from './ProductDetailPage.styles'

export default function ProductDetailPage() {
  const [inCart, setInCart] = useState(false)
  const { id } = useParams()

  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div style={{ padding: '5rem', textAlign: 'center' }}>
        <T.H1>محصول پیدا نشد!</T.H1>
      </div>
    )
  }

  const handleToggleCart = () => {
    setInCart(!inCart)
    // Context/Redux
  }

  return (
    <DetailContainer>
      <BreadcrumbNav>
        <BreadcrumbLink href="/">خانه</BreadcrumbLink>
        <BreadcrumbLink href="/products">محصولات</BreadcrumbLink>
        <span>{product.title}</span>
      </BreadcrumbNav>

      <MainSection>
        <ImageWrapper>
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority // fast load
            style={{ objectFit: 'contain', padding: '20px' }}
          />
        </ImageWrapper>

        <ContentWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price.toLocaleString()} تومان</Price>

          <T.P>
            تجربه‌ای متفاوت با {product.name}. این محصول با بالاترین کیفیت ساخت
            و طراحی ارگونومیک، همراهی هوشمند برای لحظات شماست.
          </T.P>

          <ActionContainer>
            <CartButton $active={inCart} onClick={handleToggleCart}>
              {inCart ? '❌ حذف از سبد خرید' : '🛒 افزودن به سبد خرید'}
            </CartButton>
          </ActionContainer>
        </ContentWrapper>
      </MainSection>
    </DetailContainer>
  )
}
