// src\app\checkout\success\page.js
'use client'
import { useState } from 'react'
import { H1, P } from '@/components/ui/Typography'
import Link from 'next/link'

export default function SuccessPage() {
  // this is Lazy state initialization for generating a random order ID "only once when the component mounts".
  const [orderId] = useState(() => Math.floor(Math.random() * 1000000))

  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <H1>سفارش شما با موفقیت ثبت شد! 🎉</H1>
      <P>کد پیگیری سفارش شما: {orderId}</P>
      <Link href="/">بازگشت به صفحه اصلی</Link>
    </div>
  )
}
