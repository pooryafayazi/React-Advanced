// src\app\checkout\delivery\page.js
'use client' // This is a client component for the delivery information page in the checkout process.
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import DeliveryForm from '@/components/Forms/DeliveryForm'
import { H1, P } from '@/components/ui/Typography'

export default function DeliveryPage() {
  const router = useRouter()
  const items = useSelector((state) => state.cart.items)

  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart') // redirect to cart if there are no items in the cart, ensuring that users cannot access the delivery page without having items to purchase.
    }
  }, [items, router])

  return (
    <main>
      <H1>اطلاعات ارسال</H1>
      <P>لطفا اطلاعات ارسال خود را وارد کنید.</P>
      <DeliveryForm />
    </main>
  )
}
