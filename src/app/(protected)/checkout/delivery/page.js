// src\app\checkout\delivery\page.js
'use client'
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
      router.push('/cart')
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
