// src\app\api\auth\login\route.jsx
import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'
import jwt from 'jsonwebtoken'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { message: 'ایمیل و رمز عبور الزامی است' },
        { status: 400 }
      )
    }

    const dbPath = path.join(process.cwd(), 'src', 'data', 'users.json')
    const fileData = await readFile(dbPath, 'utf8')
    const users = JSON.parse(fileData)

    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json(
        { message: 'اعتبارسنجی ناموفق بود' },
        { status: 401 }
      )
    }

    const payload = {
      userId: user.id,
      email: user.email,
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })

    const response = NextResponse.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })

    response.cookies.set({
      name: 'accessToken',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    })

    return response
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
