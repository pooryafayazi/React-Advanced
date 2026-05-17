// src\components\layout\Footer\Footer.styles.js
import styled from 'styled-components'
import Link from 'next/link'

export const FooterWrapper = styled.footer`
  border-top: 1px solid #111;
  margin-top: 0px;
  direction: rtl;
  background-color: #111;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
`

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`

export const Title = styled.h4`
  margin-bottom: 10px;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItemWrapper = styled(Link)`
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: #eee;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const BottomSection = styled.div`
  border-top: 1px solid #111;
  margin-top: 40px;
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 16px;
  }
`

export const LegalLinks = styled.div`
  font-size: 14px;
`
export const SocialIcon = styled.a`
  width: 34px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: #706f6f;

  color: #eee;
  font-size: 14px;

  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`
