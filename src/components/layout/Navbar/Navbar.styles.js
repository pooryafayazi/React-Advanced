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
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.6rem 0.1rem;
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 3.5rem;
    height: auto;
  }
`

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
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

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  span {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
`
export const CartButtonLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`

export const DropdownWrapper = styled.div`
  position: relative;
  cursor: pointer;
  color: #fff;
  font-weight: 500;

  /* استایل برای موبایل */
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #222; /* کمی روشن‌تر از بک‌گراند نوبار */
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0.5rem 0;
  min-width: 150px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1001;
  @media (max-width: 768px) {
    font-size: 0.5rem;
    min-width: 100px;
  }
`

export const DropdownItem = styled(Link)`
  display: block;
  padding: 0.7rem 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover {
    background: #333;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`
