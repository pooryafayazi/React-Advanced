// src\components\home\HomeBackground.styles.js
import styled from 'styled-components'

export const BackgroundWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url('/hero/hero-product.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.85));
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px 24px;
  color: #fff;
  direction: rtl;
`
