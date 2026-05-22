// src\app\api\auth\reset-password\route.js
import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import jwt from 'jsonwebtoken'

const USERS_FILE = path.join(process.cwd(), 'src', 'data', 'users.json')

export async function POST(req) {
  try {
    const { token, newPassword } = await req.json()
    let decoded
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
      return NextResponse.json(
        { error: 'توکن نامعتبر یا منقضی شده است' },
        { status: 400 }
      )
    }
    const { userId } = decoded
    console.log('Token Received:', token)
    console.log('User ID:', userId)

    // باید اینجا بجای 'سمپل' توکنی که در کنسول پرینت شده رو بگذاریم
    if (token !== 'سمپل') {
      return NextResponse.json({ error: 'توکن نامعتبر است' }, { status: 400 })
    }

    const fileData = await fs.readFile(USERS_FILE, 'utf-8')
    const users = JSON.parse(fileData)

    const userIndex = users.findIndex((u) => String(u.id) === String(userId))

    if (userIndex === -1) {
      return NextResponse.json({ error: 'کاربر یافت نشد' }, { status: 404 })
    }

    users[userIndex].password = newPassword

    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8')

    return NextResponse.json(
      { message: 'رمز عبور با موفقیت تغییر کرد' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ error: 'خطای سرور' }, { status: 500 })
  }
}
