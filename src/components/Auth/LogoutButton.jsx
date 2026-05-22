// src/components/Auth/LogoutButton.jsx
'use client'
import { useDispatch } from 'react-redux'
import { logout } from '@/lib/store/features/auth/authSlice'
import { useLogoutMutation } from '@/lib/store/services/authApi'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

// تعریفِ یک استایل برای دکمه خروج که ظاهرش کاملاً شبیه به لینک‌های دراپ‌داون باشد.
const LogoutLink = styled.button`
  background: none;
  border: none;
  width: 100%;
  text-align: right;
  padding: 0.7rem 1rem;
  color: #ff4d4d; // رنگ قرمز ملایم برای گزینه خروج
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`
export default function LogoutButton() {
  const dispatch = useDispatch()
  const router = useRouter()

  const [logoutApi, { isLoading }] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap()
    } catch (err) {
      // console.error('Logout failed:', err)
      console.log(
        'Full error object:',
        JSON.stringify(error, Object.getOwnPropertyNames(error))
      )
    } finally {
      dispatch(logout())

      router.push('/login')
    }
  }

  return (
    <LogoutLink onClick={handleLogout} disabled={isLoading}>
      {isLoading ? 'در حال خروج...' : 'خروج'}
    </LogoutLink>
  )
}
