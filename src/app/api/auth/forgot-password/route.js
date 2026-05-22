// src/app/api/auth/forgot-password/route.js
import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import jwt from 'jsonwebtoken'

const USERS_FILE = path.join(process.cwd(), 'src', 'data', 'users.json')

export async function POST(req) {
  try {
    const { email } = await req.json()
    const fileData = await fs.readFile(USERS_FILE, 'utf-8')
    const users = JSON.parse(fileData)

    const user = users.find((u) => u.email === email)

    if (!user) {
      return NextResponse.json(
        {
          message:
            'اگر این ایمیل در سیستم ثبت شده باشد، لینک بازیابی ارسال شد.',
        },
        { status: 200 }
      )
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'fallback_secret',
      {
        expiresIn: '15m',
      }
    )
    console.log(`--- شبیه‌سازِ ارسالِ ایمیل برای ${email} ---`)
    console.log(`توکن بازیابی رمز عبور: ${token}`)
    console.log(`-------------------------------------------`)

    return NextResponse.json(
      { message: 'ایمیل بازیابی رمز عبور با موفقیت ارسال شد.' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'خطایی در سرور رخ داده است.' },
      { status: 500 }
    )
  }
}
