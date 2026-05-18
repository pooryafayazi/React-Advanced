// src\app\products\page.js
import * as T from '@/components/ui/Typography'
import ProductList from '../../components/ProductList/ProductList'

const ProductsPage = () => {
  return (
    <main>
      <T.H1>محصولات</T.H1>

      <ProductList />
    </main>
  )
}

export default ProductsPage
