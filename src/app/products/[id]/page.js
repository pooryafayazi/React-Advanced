// src\app\products\[id]\page.js
'use client'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  decrementQuantity,
  removeFromCart,
  selectItemQuantityById,
} from '@/lib/store/features/cart/cartSlice'
import Image from 'next/image'
import { useGetProductByIdQuery } from '@/lib/store/services/productsApi'
import * as T from '@/components/ui/Typography'
import {
  DetailContainer,
  MainSection,
  ImageWrapper,
  ContentWrapper,
  Title,
  Price,
  BreadcrumbNav,
  BreadcrumbLink,
  ActionContainer,
  CartButton,
  QuantityWrapper,
  QuantityButton,
  QuantityValue,
} from './ProductDetailPage.styles'

export default function ProductDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  // 1. Get cart items from the Redux store (api slice state is automatically managed by RTK Query)
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(id, {
    skip: !id, // only fetch if ID is available
    refetchOnMountOrArgChange: true, // refetch if ID changes (e.g. navigating to another product)
  })

  const quantity = useSelector(selectItemQuantityById(id))
  const isInCart = quantity > 0

  const handleAdd = () => {
    if (!product) return
    dispatch(addToCart(product))
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity(id))
  }

  const handleRemove = () => {
    dispatch(removeFromCart(id))
  }

  if (isLoading) return <p>در حال بارگذاری محصول...</p>
  if (error) return <p>خطا در بارگذاری محصول: {error.message}</p>
  if (!product) {
    return (
      <div style={{ padding: '5rem', textAlign: 'center' }}>
        <T.H1>محصول پیدا نشد!</T.H1>
      </div>
    )
  }

  return (
    <DetailContainer>
      <BreadcrumbNav>
        <BreadcrumbLink href="/">خانه</BreadcrumbLink>
        <BreadcrumbLink href="/products">محصولات</BreadcrumbLink>
        <span>{product.title}</span>
      </BreadcrumbNav>

      <MainSection>
        <ImageWrapper>
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority // fast load
            style={{ objectFit: 'contain', padding: '20px' }}
          />
        </ImageWrapper>

        <ContentWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price.toLocaleString()} تومان</Price>

          <T.P>
            تجربه‌ای متفاوت با {product.title}. این محصول با بالاترین کیفیت ساخت
            و طراحی ارگونومیک، همراهی هوشمند برای لحظات شماست.
          </T.P>

          <ActionContainer>
            {!isInCart ? (
              <CartButton $active={false} onClick={handleAdd}>
                🛒 افزودن به سبد خرید
              </CartButton>
            ) : (
              <>
                <QuantityWrapper>
                  <QuantityButton onClick={handleDecrement}>−</QuantityButton>
                  <QuantityValue>{quantity}</QuantityValue>
                  <QuantityButton onClick={handleAdd}>+</QuantityButton>
                </QuantityWrapper>

                <CartButton $active={true} onClick={handleRemove}>
                  ❌ حذف از سبد
                </CartButton>
              </>
            )}
          </ActionContainer>
        </ContentWrapper>
      </MainSection>
    </DetailContainer>
  )
}
