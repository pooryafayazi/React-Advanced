// src\components\layout\Navbar\Navbar.js
'use client'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { selectCartCount } from '@/lib/store/features/cart/cartSlice'
import {
  Nav,
  Logo,
  NavLinks,
  StyledLink,
  CartIcon,
  Badge,
  CartButtonLink,
} from './Navbar.styles'

const Navbar = () => {
  const cartCount = useSelector(selectCartCount)
  return (
    <Nav>
      <Logo href="/">
        <Image
          src="/logo3.png"
          alt="GapShop Logo"
          width={0}
          height={0}
          style={{ width: 'auto', height: '60px' }}
          priority
        />
      </Logo>

      <NavLinks>
        <StyledLink href="/">صفحه نخست</StyledLink>
        <StyledLink href="/products">فروشگاه</StyledLink>
        <StyledLink href="/about">درباره ما</StyledLink>
        <StyledLink href="/contact">تماس با ما</StyledLink>
      </NavLinks>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Link href="/cart">
          <CartIcon>
            🛒
            {cartCount > 0 && (
              <Badge data-testid="cart-quantity">{cartCount}</Badge>
            )}
            <span>سبد خرید</span>
          </CartIcon>
        </Link>
      </div>
    </Nav>
  )
}

export default Navbar
