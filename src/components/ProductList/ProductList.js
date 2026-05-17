// src\components\product\ProductList.js
'use client'

import ProductCard from '../ProductCard/ProductCard'
import { products } from '../../data/products'
import { Grid } from './ProductList.styles'

const ProductList = () => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  )
}

export default ProductList
