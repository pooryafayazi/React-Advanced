// src\components\product\ProductList.js
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  gap: ${({ theme }) => theme.spacing.lg};

  padding: ${({ theme }) => theme.spacing.lg};
`
