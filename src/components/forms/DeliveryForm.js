// src\components\Forms\DeliveryForm.js
'use client'
import { useForm } from '@/hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryInfo } from '@/lib/store/features/cart/cartSlice'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { H3 } from '@/components/ui/Typography'
import styled from 'styled-components'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export default function DeliveryForm() {
  // useDispatch is used to get the dispatch function from the Redux store,
  // which allows us to dispatch actions to update the state.
  const dispatch = useDispatch()

  // useRouter is a hook from Next.js that allows us to programmatically navigate to different pages.
  const router = useRouter()

  // if the user has previously entered delivery information,
  // we can pre-fill the form with that data by accessing the deliveryInfo from the Redux store using useSelector.
  // This allows for a better user experience by not forcing the user to re-enter information they have already provided.
  const deliveryInfo = useSelector((state) => state.cart.deliveryInfo)

  // useForm hook is used to manage the form state,
  // and it is initialized with the existing delivery information from the Redux store (if available).
  const { values, handleChange } = useForm({
    fullName: deliveryInfo.fullName || '',
    phone: deliveryInfo.phone || '',
    city: deliveryInfo.city || '',
    address: deliveryInfo.address || '',
    postalCode: deliveryInfo.postalCode || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // save the delivery information to the Redux store
    dispatch(setDeliveryInfo(values))
    // redirect to payment page
    router.push('/checkout/payment')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <H3>اطلاعات تحویل سفارش</H3>

      <FormGroup>
        <Input
          name="fullName"
          placeholder="نام و نام خانوادگی"
          value={values.fullName}
          onChange={handleChange}
          required
          data-testid="fullName-input"
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="phone"
          placeholder="شماره تماس"
          value={values.phone}
          onChange={handleChange}
          required
          data-testid="phone-input"
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="city"
          placeholder="شهر"
          value={values.city}
          onChange={handleChange}
          required
          data-testid="city-input"
        />
      </FormGroup>

      <FormGroup>
        <Textarea
          name="address"
          placeholder="آدرس دقیق"
          value={values.address}
          onChange={handleChange}
          required
          data-testid="address-input"
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="postalCode"
          placeholder="کد پستی"
          value={values.postalCode}
          onChange={handleChange}
          data-testid="postalCode-input"
        />
      </FormGroup>

      <Button type="submit" size="lg" data-testid="submit-delivery-btn">
        ادامه به پرداخت
      </Button>
    </FormContainer>
  )
}
