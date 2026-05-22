// src/components/auth/ChangePasswordForm.jsx
'use client'

import { useState } from 'react'
import { useChangePasswordMutation } from '@/lib/store/services/authApi'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [changePassword, { isLoading }] = useChangePasswordMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await changePassword({ oldPassword, newPassword }).unwrap()
      alert('رمز عبور با موفقیت تغییر کرد.')
    } catch (err) {
      console.error('Change password error:', err)
      alert(err.data?.message || 'خطا در تغییر رمز عبور.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
    >
      <Input
        type="password"
        placeholder="رمز فعلی"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        size="lg"
        required
      />
      <Input
        type="password"
        placeholder="رمز جدید"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        size="lg"
        required
      />
      <Button type="submit" size="lg" disabled={isLoading}>
        {isLoading ? 'در حال تغییر...' : 'ذخیره رمز جدید'}
      </Button>
    </form>
  )
}
