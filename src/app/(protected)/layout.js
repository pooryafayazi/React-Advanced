// src/app/(protected)/layout.js
import ProtectedRoute from '@/components/Auth/ProtectedRoute'

export default function ProtectedLayout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>
}
