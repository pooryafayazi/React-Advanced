// src\components\home\HeroSection.styles.js
import styled from 'styled-components'
import Link from 'next/link'

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 85vh;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 70% 30%,
      rgba(255, 255, 255, 0.04),
      transparent 40%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
`

export const HeroContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 30px 24px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 728x) {
    grid-template-columns: 1fr;
    padding-top: 100px;
  }
`

export const TextContent = styled.div`
  color: #fff;
  direction: rtl;
`

export const Eyebrow = styled.div`
  color: #d4af37;
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 16px;
`

export const Title = styled.h1`
  font-size: 3.4rem;
  line-height: 1.15;
  margin: 0 0 20px;
  font-weight: 800;

  span {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`

export const Description = styled.p`
  color: #d1d5db;
  max-width: 520px;
  line-height: 1.9;
  margin-bottom: 32px;
`

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const PrimaryButton = styled(Link)`
  background: #d4af37;
  color: #111;
  padding: 12px 28px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }
`

export const SecondaryButton = styled(Link)`
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  padding: 12px 28px;
  border-radius: 999px;
  text-decoration: none;
  backdrop-filter: blur(6px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const TrustBadges = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  color: #cbd5f5;
  font-size: 0.9rem;
`

export const Badge = styled.div`
  opacity: 0.9;
`

export const Visual = styled.div`
  position: relative;
  width: 100%;
  height: 420px;

  @media (max-width: 900px) {
    height: 320px;
  }
`
