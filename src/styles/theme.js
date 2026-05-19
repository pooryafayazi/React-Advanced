// src\styles\theme.js
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const theme = {
  colors: {
    primary: '#6900f3',
    secondary: '#ccc',
    accent: '#ff8800',
    background: '#111',
    text: '#eee',
    textSecondary: '#ccc',
    mutedText: '#888',
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
  radius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
  },
  spaces: ['0px', '2px', '4px', '8px', '16px', '32px'],
  boxShadow: {
    light: '0 4px 16px rgba(0,1,31,0.2)',
  },
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Vazirmatn';
    src: url('/fonts/vazirmatn-arabic-300-normal.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url('/fonts/vazirmatn-arabic-400-normal.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url('/fonts/vazirmatn-arabic-500-normal.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url('/fonts/vazirmatn-arabic-700-normal.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* RESET + BASE STYLE */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Vazirmatn';
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font.sizes.base};
    line-height: 1;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  p {
    color: ${(props) => props.theme.colors.textSecondary};
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
