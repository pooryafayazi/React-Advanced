// src\components\ui\Input.js
'use client'

import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  padding: ${(props) =>
    props.size === 'lg'
      ? '14px 16px'
      : props.size === 'sm'
        ? '8px 12px'
        : '10px 14px'};
  border-radius: ${(props) => props.theme.radius.sm};
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) =>
    props.size === 'lg'
      ? props.theme.font.sizes.large
      : props.size === 'sm'
        ? props.theme.font.sizes.small
        : props.theme.font.sizes.base};
  transition: all 0.25s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

export default function Input({
  type = 'text',
  placeholder = '',
  size = 'md',
  value,
  onChange,
  ...props
}) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      size={size}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}
