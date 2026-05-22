// src\components\Auth\ForgotPasswordForm.jsx
'use client'

import { useState } from 'react'
import { useForgotPasswordMutation } from '@/lib/store/services/authApi'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await forgotPassword({ email }).unwrap()
      alert('توکن تولید شد! به صفحه‌ی بازنشانی هدایت می‌شوید.')
      router.push('/reset-password')
    } catch (err) {
      console.error('Forgot password error:', err)
      alert(err.data?.message || 'خطا در ارسال درخواست.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      <Input
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size="lg"
        required
      />
      <Button type="submit" size="lg" disabled={isLoading}>
        {isLoading ? 'در حال ارسال...' : 'ارسال لینک بازیابی'}
      </Button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px',
          fontSize: '0.9rem',
        }}
      >
        <Link href="/login" style={{ color: '#6900f3', fontWeight: 'bold' }}>
          ورود به حساب
        </Link>

        <Link href="/register" style={{ color: '#6900f3', fontWeight: 'bold' }}>
          ثبت‌نام کنید
        </Link>
      </div>
    </form>
  )
}
