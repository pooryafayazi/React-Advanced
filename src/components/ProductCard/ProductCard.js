// src\components\product\ProductCard.js
'use client'

import Link from 'next/link'

import {
  Card,
  ImageWrapper,
  Image,
  Content,
  Title,
  Price,
  DetailsLink,
} from './ProductCard.styles'

const ProductCard = ({ product }) => {
  const { id, title, price, image } = product

  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>

      <Content>
        <Title>{title}</Title>

        <Price>{price} تومان</Price>

        <Link href={`/products/${id}`}>
          <DetailsLink>مشاهده جزئیات</DetailsLink>
        </Link>
      </Content>
    </Card>
  )
}

export default ProductCard
