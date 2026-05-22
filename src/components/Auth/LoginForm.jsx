// src\components\Auth\LoginForm.jsx
'use client'
import { useState } from 'react'
import { useLoginMutation } from '@/lib/store/services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '@/lib/store/features/auth/authSlice'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginTrigger, loginResult] = useLoginMutation()
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await loginTrigger({
        email,
        password,
      }).unwrap()

      dispatch(setUser(result.user))
      router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      alert(error.data?.message || 'Login failed')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-md w-80 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="border rounded w-full p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="border rounded w-full p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loginResult.isLoading}
        className={`w-full py-2 rounded text-white 
          ${loginResult.isLoading ? 'bg-gray-400' : 'bg-blue-600'}`}
      >
        {loginResult.isLoading ? 'Logging in...' : 'Login'}
      </button>

      {loginResult.error && (
        <p className="text-red-600 text-sm">
          {loginResult.error.data?.message || 'Something went wrong'}
        </p>
      )}
    </form>
  )
}
