// src\components\layout\Navbar\Navbar.js
'use client'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { selectCartCount } from '@/lib/store/features/cart/cartSlice'
import LogoutButton from '@/components/Auth/LogoutButton'
import {
  Nav,
  Logo,
  NavLinks,
  StyledLink,
  CartIcon,
  Badge,
  DropdownWrapper,
  DropdownMenu,
  DropdownItem,
} from './Navbar.styles'

const Navbar = () => {
  // const [isMounted, setIsMounted] = useState(false)
  const isMounted = React.useSyncExternalStore(
    () => () => {
      return null
    },
    () => true,
    () => false
  )
  const cartCount = useSelector(selectCartCount)
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  if (!isMounted) {
    return (
      <Nav>
        <span>در حال بارگذاری...</span>
      </Nav>
    )
  }
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {isAuthenticated ? (
          <DropdownWrapper onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {user?.name || 'کاربر'} ▾
            <DropdownMenu $isOpen={isDropdownOpen}>
              <DropdownItem href="/profile">پروفایل من</DropdownItem>
              <div style={{ borderTop: '1px solid #333' }} />
              <DropdownItem href="/change-password">
                تغییر رمز عبور
              </DropdownItem>
              <div style={{ borderTop: '1px solid #333' }} />
              <LogoutButton />{' '}
            </DropdownMenu>
          </DropdownWrapper>
        ) : (
          !isLoading && <StyledLink href="/login">ورود / ثبت‌نام</StyledLink>
        )}

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
