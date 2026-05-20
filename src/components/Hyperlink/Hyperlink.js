// src\components\Hyperlink\Hyperlink.js
import Link from 'next/link'
import styled from 'styled-components'

const StyledHyperlink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Hyperlink = ({ children, href, ...props }) => {
  return (
    <StyledHyperlink href={href} {...props}>
      {children}
    </StyledHyperlink>
  )
}

export default Hyperlink
