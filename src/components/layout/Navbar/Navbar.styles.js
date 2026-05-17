// src\components\layout\Navbar\Navbar.styles.js
import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  direction: rtl;
  background: #111;
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none; // در موبایل فعلاً مخفی می‌کنیم تا پیچیده نشود
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 1.2rem;
`

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
`
