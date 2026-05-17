// src\components\ui\Button.js
'use client'

import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) =>
    props.variant === 'outline' ? 500 : props.theme.font.weight.bold};
  cursor: pointer;
  border-radius: ${(props) => props.theme.radius.md};
  border: none;
  transition: all 0.25s ease-in-out;
  padding: ${(props) =>
    props.size === 'lg'
      ? '14px 28px'
      : props.size === 'sm'
        ? '8px 16px'
        : '10px 22px'};
  font-size: ${(props) =>
    props.size === 'lg'
      ? props.theme.font.sizes.large
      : props.size === 'sm'
        ? props.theme.font.sizes.small
        : props.theme.font.sizes.base};

  color: ${(props) =>
    props.variant === 'outline' ? props.theme.colors.primary : '#fff'};
  background: ${(props) =>
    props.variant === 'outline' ? 'transparent' : props.theme.colors.primary};

  border: ${(props) =>
    props.variant === 'outline'
      ? `2px solid ${props.theme.colors.primary}`
      : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
    props.variant === 'outline'
      ? `0 0 0 3px rgba(0,112,243,0.1)`
      : '0 8px 30px rgba(0,112,243,0.4)'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default function Button({
  children,
  variant = 'solid', // solid | outline
  size = 'md', // sm | md | lg
  type = 'button',
  ...props
}) {
  return (
    <StyledButton variant={variant} size={size} type={type} {...props}>
      {children}
    </StyledButton>
  )
}
