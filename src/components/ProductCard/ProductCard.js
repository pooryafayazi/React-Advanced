// src\components\ProductCard\ProductCard.js
'use client'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  decrementQuantity,
  selectItemQuantityById,
} from '@/lib/store/features/cart/cartSlice'
import {
  Card,
  ImageWrapper,
  Image,
  Content,
  Title,
  Price,
  DetailsLink,
  CartActions,
  SmallButton,
  QtyValue,
} from './ProductCard.styles'

const ProductCard = ({ product }) => {
  const { id, title, price, image } = product
  const dispatch = useDispatch()
  const quantity = useSelector(selectItemQuantityById(id))
  const isInCart = quantity > 0

  const handleAdd = () => dispatch(addToCart(product))
  const handleDecrement = () => dispatch(decrementQuantity(id))

  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>

      <Content>
        <Title>{title}</Title>
        <Price>{price} تومان</Price>

        <CartActions>
          {!isInCart ? (
            <SmallButton onClick={handleAdd}>➕ افزودن به سبد</SmallButton>
          ) : (
            <>
              <SmallButton onClick={handleDecrement}>−</SmallButton>
              <QtyValue>{quantity}</QtyValue>
              <SmallButton onClick={handleAdd}>+</SmallButton>
            </>
          )}
        </CartActions>

        <Link href={`/products/${id}`}>
          <DetailsLink>مشاهده جزئیات</DetailsLink>
        </Link>
      </Content>
    </Card>
  )
}

export default ProductCard
