// src/app/api/auth/logout/route.js
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  const cookieStore = await cookies()

  // پاک کردن توکن از کوکی‌ها
  cookieStore.delete('accessToken')

  return NextResponse.json({ message: 'Logged out successfully' })
}
