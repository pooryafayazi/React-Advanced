// src\app\checkout\payment\page.js
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { H1, H2, P, B } from '@/components/ui/Typography'
import PaymentForm from '@/components/Forms/PaymentForm'

export default function PaymentPage() {
  const items = useSelector((state) => state.cart.items)
  const deliveryInfo = useSelector((state) => state.cart.deliveryInfo)
  const router = useRouter()

  useEffect(() => {
    if (!deliveryInfo.fullName) {
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
