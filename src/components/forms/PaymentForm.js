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

  const handlePayment = async (e) => {
    e.preventDefault()
    setLoading(true)

    // simulate payment processing delay
    setTimeout(() => {
      setLoading(false)
      // After successful payment, clear the cart and redirect to success page
      dispatch(clearCart())
      // redirect to success page
      router.push('/checkout/success')
    }, 2000)
  }

  return (
    <FormContainer onSubmit={handlePayment}>
      <Input
        name="cardNumber"
        placeholder="شماره کارت (۱۶ رقمی)"
        onChange={handleChange}
        required
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Input
          name="cvv2"
          placeholder="CVV2"
          onChange={handleChange}
          required
        />
        <Input
          name="expiry"
          placeholder="تاریخ انقضا"
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? 'در حال اتصال به درگاه...' : 'پرداخت و تکمیل سفارش'}
      </Button>
    </FormContainer>
  )
}
