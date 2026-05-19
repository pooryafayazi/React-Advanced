// src\components\ProductList\ProductList.stories.js
import { Grid } from './ProductList.styles'
import ProductCard from '../ProductCard/ProductCard'

const mockProducts = [
  {
    id: 1,
    title: 'AirPods Pro',
    price: '120000000',
    image: '/images/headphones.webp',
  },
  {
    id: 2,
    title: 'AirPods Pro',
    price: '85000000',
    image: '/images/headphones.webp',
  },
  {
    id: 3,
    title: 'AirPods Pro',
    price: '12000000',
    image: '/images/headphones.webp',
  },
]

export default {
  title: 'Product/ProductList',
}

export const Default = () => (
  <Grid>
    {mockProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Grid>
)
