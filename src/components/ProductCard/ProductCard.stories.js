// src\components\ProductCard\ProductCard.stories.js
import ProductCard from './ProductCard'

export default {
  title: 'Product/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '280px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

const mockProduct = {
  id: 1,
  title: 'AirPods Pro',
  price: '120000000',
  image: '/images/headphones.webp',
}

export const Default = {
  args: {
    product: mockProduct,
  },
}
