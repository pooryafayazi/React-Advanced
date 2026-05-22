// src/app/api/auth/change-password/route.js
import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { jwtVerify } from 'jose'

const USERS_FILE = path.join(process.cwd(), 'src', 'data', 'users.json')
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key'

export async function POST(req) {
  const { oldPassword, newPassword } = await req.json()

  const token = req.cookies.get('accessToken')?.value

  if (!token) {
    return NextResponse.json(
      { message: 'دسترسی غیرمجاز. لطفا لاگین کنید.' },
      { status: 401 }
    )
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    )
    const userId = payload.userId

    const fileData = await fs.readFile(USERS_FILE, 'utf-8')
    const users = JSON.parse(fileData)

    console.log('Payload ID from Token:', userId, 'Type:', typeof userId)
    console.log('First user in DB:', users[0].id, 'Type:', typeof users[0].id)

    const userIndex = users.findIndex((u) => String(u.id) === String(userId))

    // const userIndex = users.findIndex((u) => u.id === userId)

    if (userIndex === -1) {
      return NextResponse.json({ message: 'کاربر یافت نشد.' }, { status: 404 })
    }

    if (users[userIndex].password !== oldPassword) {
      return NextResponse.json(
        { message: 'رمز عبور فعلی اشتباه است.' },
        { status: 400 }
      )
    }

    users[userIndex].password = newPassword

    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2))

    return NextResponse.json(
      { message: 'رمز عبور با موفقیت تغییر کرد.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Change password server error:', error)
    return NextResponse.json(
      { message: 'خطای سرور یا توکن نامعتبر.' },
      { status: 500 }
    )
  }
}
