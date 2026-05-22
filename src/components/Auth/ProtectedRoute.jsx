// src/components/Auth/ProtectedRoute.jsx
'use client'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import AuthSkeleton from './AuthSkeleton'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return <AuthSkeleton />
  }

  return isAuthenticated ? children : null
}
