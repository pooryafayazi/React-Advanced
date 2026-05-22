import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get('accessToken')?.value
  const isAuthRoute = path.startsWith('/login') || path.startsWith('/register')

  const isProtectedRoute =
    path.startsWith('/checkout/delivery') ||
    path.startsWith('/checkout/payment') ||
    path.startsWith('/checkout/success')

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/checkout/delivery/:path*',
    '/checkout/payment/:path*',
    '/checkout/success/:path*',
    '/login',
    '/register',
  ],
}
