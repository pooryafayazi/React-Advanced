// src\components\Forms\ContactForm.js
'use client'

import { useForm } from '@/hooks/useForm'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'

export default function ContactForm() {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ارسال شد:', values)
    alert('پیغام شما ارسال شد!')
    resetForm()
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
    >
      <Input
        name="name"
        placeholder="نام"
        value={values.name}
        onChange={handleChange}
        size="lg"
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="ایمیل"
        value={values.email}
        onChange={handleChange}
        size="lg"
        required
      />
      <Textarea
        name="message"
        placeholder="پیام شما"
        rows="5"
        value={values.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" size="lg">
        ارسال پیام
      </Button>
    </form>
  )
}
