// src\app\contact\page.js
'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('پیغام ارسال شد:', formData)
    alert(
      'پیغام شما با موفقیت ارسال شد! (فعلاً فقط در حالت تمرینی ذخیره نمی‌شود)'
    )
  }

  return (
    <main
      style={{
        padding: '40px 24px',
        direction: 'rtl',
        maxWidth: '700px',
        margin: 'auto',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>تماس با ما</h1>

      <section>
        <p style={{ color: '#eee', lineHeight: 1.8, marginBottom: '24px' }}>
          اگر سوالی در مورد محصولات، روند خرید یا توسعه پروژه دارید، می‌توانید
          از طریق فرم زیر با ما تماس بگیرید. پاسخ شما ظرف ۲۴ ساعت کاری داده
          خواهد شد.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <label>
            نام:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
              required
            />
          </label>

          <label>
            ایمیل:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
              required
            />
          </label>

          <label>
            پیام:
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
              required
            ></textarea>
          </label>

          <button
            type="submit"
            style={{
              marginTop: '10px',
              background: '#0070f3',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            ارسال پیام
          </button>
        </form>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ marginBottom: '10px' }}>اطلاعات تماس مستقیم:</h2>
        <ul style={{ paddingRight: 18, color: '#eee', lineHeight: 1.8 }}>
          <li>
            ایمیل: <a href="mailto:support@shop.com">support@shop.com</a>
          </li>
          <li>تلفن: ۰۹۱۲۱۲۳۴۵۶۷</li>
          <li>آدرس دفتر: تهران، خیابان آزادی، پلاک ۲۳</li>
        </ul>
      </section>
    </main>
  )
}
