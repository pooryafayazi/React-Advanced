// src\components\Auth\AuthInitializer.jsx
'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetMeQuery } from '@/lib/store/services/authApi'
import {
  setUser,
  logout,
  setLoading,
} from '@/lib/store/features/auth/authSlice'
import AuthSkeleton from './AuthSkeleton'

export default function AuthInitializer({ children }) {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetMeQuery()

  useEffect(() => {
    if (data) {
      dispatch(setUser(data))
    }

    if (isError) {
      dispatch(logout())
    }
  }, [data, isError, dispatch])

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading, dispatch])

  if (isLoading) {
    return <AuthSkeleton />
  }

  return children
}
