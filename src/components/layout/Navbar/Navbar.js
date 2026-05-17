// src\components\layout\Navbar\Navbar.js
'use client'
import Image from 'next/image'

import React from 'react'
import {
  Nav,
  Logo,
  NavLinks,
  StyledLink,
  CartIcon,
  Badge,
} from './Navbar.styles'

const Navbar = () => {
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

      <CartIcon>
        🛒
        <Badge>۰</Badge>
      </CartIcon>
    </Nav>
  )
}

export default Navbar
