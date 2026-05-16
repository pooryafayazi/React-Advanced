'use client'
import styled from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export default Heading
