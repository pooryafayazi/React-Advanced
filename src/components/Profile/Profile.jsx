// src/components/Profile/Profile.jsx
'use client'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProfilePage() {
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return <p>در حال انتقال به صفحه ورود...</p>
  }

  return (
    <main style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>پروفایل کاربری</h1>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          marginTop: '20px',
        }}
      >
        <p>
          <strong>نام:</strong> {user?.name || 'کاربر گرامی'}
        </p>
        <p>
          <strong>ایمیل:</strong> {user?.email}
        </p>
      </div>
    </main>
  )
}
