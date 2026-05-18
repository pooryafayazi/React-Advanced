// src\components\ui\Textarea.js
'use client'

import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: ${(props) => props.theme.radius.sm};
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.sizes.base};
  resize: vertical; /* کاربر بتونه فقط ارتفاع رو تغییر بده */
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

export default function Textarea({ placeholder, value, onChange, ...props }) {
  return (
    <StyledTextarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}
