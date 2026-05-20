// src\components\ProductList\ProductList.js
'use client'

import ProductCard from '../ProductCard/ProductCard'
import { Grid } from './ProductList.styles'
import { useGetProductsQuery } from '@/lib/store/services/productsApi'

const ProductList = () => {
  // use hook to fetch products from RTK Query
  const { data: products = [], isLoading, error } = useGetProductsQuery()

  if (isLoading) {
    return <p>در حال بارگذاری محصولات...</p>
  }

  if (error) {
    return <p>خطا در بارگذاری محصولات: {error.message}</p>
  }

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  )
}

export default ProductList
