// src\styles\theme.js
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1A1A1A',
    accent: '#ff8800',
    background: '#fff',
    text: '#333',
  },
  font: {
    family: "'Inter', sans-serif",
    sizes: {
      small: '0.9rem',
      base: '1rem',
      large: '1.3rem',
      xl: '2rem',
    },
    weight: {
      normal: 400,
      bold: 600,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
}

export const GlobalStyle = createGlobalStyle`
  /* RESET + BASE STYLE */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: ${(props) => props.theme.font.family};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font.sizes.base};
    line-height: 1.6;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${(props) => props.theme.colors.accent};
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }
`
