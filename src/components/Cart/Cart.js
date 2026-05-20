// src\components\Cart\Cart.js
'use client'

import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '@/lib/store/features/cart/cartSlice'

import {
  CartContainer,
  Title,
  CartItem,
  ItemInfo,
  ItemTitle,
  Price,
  QuantityControls,
  Button,
  RemoveBtn,
  Total,
  ItemImage,
  LineTotal,
} from './Cart.styles'
const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (items.length === 0) {
    return (
      <CartContainer>
        <Title>سبد خرید</Title>
        <p>سبد خرید شما خالی است.</p>
      </CartContainer>
    )
  }

  return (
    <CartContainer>
      <Title>سبد خرید</Title>

      {items.map((item) => {
        const lineTotal = item.price * item.quantity

        return (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.title} />

            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>
              <Price>{item.price.toLocaleString()} تومان</Price>
            </ItemInfo>

            <QuantityControls>
              <Button onClick={() => dispatch(incrementQuantity(item.id))}>
                ➕
              </Button>

              <span>{item.quantity}</span>

              <Button onClick={() => dispatch(decrementQuantity(item.id))}>
                ➖
              </Button>

              <LineTotal>{lineTotal.toLocaleString()} تومان</LineTotal>
            </QuantityControls>

            <RemoveBtn onClick={() => dispatch(removeFromCart(item.id))}>
              حذف
            </RemoveBtn>
          </CartItem>
        )
      })}

      <Total>مجموع سبد: {totalPrice.toLocaleString()} تومان</Total>

      <Link href="/checkout/delivery">
        <Button style={{ marginTop: '20px', width: '100%' }}>
          ادامه به مرحله ارسال
        </Button>
      </Link>
    </CartContainer>
  )
}

export default Cart
