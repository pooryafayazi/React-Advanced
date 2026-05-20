// src\app\checkout\payment\page.js
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { H1, H2, P, B } from '@/components/ui/Typography'
import PaymentForm from '@/components/Forms/PaymentForm'

export default function PaymentPage() {
  // useSelector is used to access the delivery information and cart items from the Redux store.
  const items = useSelector((state) => state.cart.items)
  const deliveryInfo = useSelector((state) => state.cart.deliveryInfo)
  const router = useRouter()

  // useEffect is used to check if there are items in the cart when the component mounts.
  // If the cart is empty, it redirects the user back to the checkout page.
  useEffect(() => {
    if (!deliveryInfo.fullName) {
      // If the delivery information is missing, it redirects the user to the delivery information page.
      router.push('/checkout/delivery')
    }
  }, [items, deliveryInfo, router])

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: '20px' }}>
      <H1>پرداخت نهایی</H1>

      <div style={{ marginBottom: '30px' }}>
        <H2>خلاصه سفارش</H2>
        <P>
          مجموع مبلغ: <B>{totalPrice.toLocaleString()} تومان</B>
        </P>
        <P>
          ارسال به: {deliveryInfo.fullName} - {deliveryInfo.address}
        </P>
      </div>

      <PaymentForm />
    </div>
  )
}
