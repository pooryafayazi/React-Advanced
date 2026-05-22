// src\components\Auth\RegisterForm.jsx
'use client'
import { useState } from 'react'
import { useRegisterMutation } from '@/lib/store/services/authApi'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/lib/store/services/authApi'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [registerTrigger, registerResult] = useRegisterMutation()
  const [loginTrigger] = useLoginMutation()

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await registerTrigger({ email, password, name }).unwrap()
      await loginTrigger({ email, password }).unwrap()
      router.push('/')
    } catch (error) {
      console.error('Registration/Login error:', error)
      alert(error.data?.message || 'ثبت‌نام با خطا مواجه شد')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      <Input
        type="text"
        placeholder="نام و نام خانوادگی"
        value={name}
        onChange={(e) => setName(e.target.value)}
        size="lg"
        required
      />

      <Input
        type="email"
        placeholder="ایمیل"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size="lg"
        required
      />

      <Input
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        size="lg"
        required
      />

      <Button type="submit" size="lg" disabled={registerResult.isLoading}>
        {registerResult.isLoading ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
      </Button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px',
          fontSize: '0.9rem',
        }}
      >
        <Link href="/forgot-password" style={{ color: '#ccc' }}>
          فراموشی رمز عبور؟
        </Link>
        <Link href="/login" style={{ color: '#6900f3', fontWeight: 'bold' }}>
          ورود به حساب
        </Link>
      </div>

      {registerResult.error && (
        <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>
          {registerResult.error.data?.message ||
            'مشکلی پیش آمده، دوباره تلاش کنید'}
        </p>
      )}
    </form>
  )
}
