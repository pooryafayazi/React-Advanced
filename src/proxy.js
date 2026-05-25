// src\proxy.js
import { NextResponse } from 'next/server'

export function proxy(request) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get('accessToken')?.value
  const isAuthRoute = path.startsWith('/login') || path.startsWith('/register')

  const isProtectedRoute =
    path.startsWith('/checkout/delivery') ||
    path.startsWith('/checkout/payment') ||
    path.startsWith('/checkout/success') ||
    path.startsWith('/change-password')

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
