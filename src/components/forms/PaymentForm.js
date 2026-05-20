// src\components\Forms\PaymentForm.js
'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { clearCart } from '@/lib/store/features/cart/cartSlice'
import { useForm } from '@/hooks/useForm'
import styled from 'styled-components'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

export default function PaymentForm() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  // useForm hook is used to manage the form state for payment information, including card number, CVV2, and expiry date.
  const { values, handleChange } = useForm({
    cardNumber: '',
    cvv2: '',
    expiry: '',
  })

  const [error, setError] = useState(null)

  const handlePayment = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // simulate payment processing delay
      const response = await fetch('/api/checkout', { method: 'POST' })

      if (!response.ok) throw new Error('خطایی در پردازش پرداخت رخ داد')

      // successful payment, clear cart and redirect to success page
      dispatch(clearCart())
      router.push('/checkout/success')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormContainer onSubmit={handlePayment}>
      <Input
        name="cardNumber"
        placeholder="شماره کارت (۱۶ رقمی)"
        onChange={handleChange}
        required
        data-testid="cardNumber-input"
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Input
          name="cvv2"
          placeholder="CVV2"
          onChange={handleChange}
          required
          data-testid="cvv2-input"
        />
        <Input
          name="expiry"
          placeholder="تاریخ انقضا"
          onChange={handleChange}
          required
          data-testid="expiry-input"
        />
      </div>

      {error && (
        <p data-testid="error-message" style={{ color: 'red' }}>
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        data-testid="submit-payment-btn"
      >
        {loading ? 'در حال اتصال به درگاه...' : 'پرداخت و تکمیل سفارش'}
      </Button>
    </FormContainer>
  )
}
