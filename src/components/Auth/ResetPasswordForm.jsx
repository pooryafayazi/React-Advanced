// src\components\Auth\ResetPasswordForm.jsx
'use client'
import { useState } from 'react'
import { useResetPasswordMutation } from '@/lib/store/services/authApi'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ResetPasswordForm() {
  const [token, setToken] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [resetPassword, resetresult] = useResetPasswordMutation()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      alert('رمزهای عبور مطابقت ندارند')
      return
    }

    try {
      await resetPassword({ token, newPassword }).unwrap()
      alert('رمز عبور با موفقیت تغییر کرد')
      router.push('/login')
    } catch (err) {
      alert('خطا در تغییر رمز عبور')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      <Input
        type="text"
        placeholder="توکن را وارد کنید"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        required
        size="lg"
      />
      <Input
        type="password"
        placeholder="رمز عبور جدید"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
        size="lg"
      />
      <Input
        type="password"
        placeholder="تکرار رمز عبور جدید"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        size="lg"
      />
      <Button type="submit" size="lg" disabled={resetresult.isLoading}>
        {resetresult.isLoading ? 'در حال ارسال...' : 'تغییر رمز عبور'}
      </Button>
    </form>
  )
}
