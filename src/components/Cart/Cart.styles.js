// src\components\Cart\Cart.styles.js
'use client'

import styled from 'styled-components'

export const CartContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
`

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  direction: rtl;
`

export const ItemInfo = styled.div`
  flex: 1;
`

export const ItemTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const Price = styled.p`
  color: #555;
  margin: 5px 0;
`

export const QuantityControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`

export const Button = styled.button`
  padding: 6px 12px;
  background: ${(props) => (props.$variant === 'primary' ? '#007bff' : '#333')};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: #000;
  }
`

export const RemoveBtn = styled(Button)`
  background: #b30000;

  &:hover {
    background: #800;
  }
`

export const Total = styled.h2`
  margin-top: 30px;
  font-size: 22px;
  text-align: right;
`
export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-left: 15px;
`
export const LineTotal = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: #ccc;
  text-align: center;
`
