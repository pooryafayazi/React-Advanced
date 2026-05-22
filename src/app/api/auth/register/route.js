// src\app\api\auth\register\route.js
import { NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request) {
  try {
    const { email, password, name } = await request.json()

    const dbPath = path.join(process.cwd(), 'src', 'data', 'users.json')

    const fileData = await readFile(dbPath, 'utf8')

    const users = JSON.parse(fileData)

    const userExists = users.find((u) => u.email === email)
    if (userExists) {
      return NextResponse.json(
        { message: 'کاربر با این ایمیل قبلاً ثبت‌نام کرده است' },
        { status: 400 }
      )
    }

    const newUser = {
      id: Date.now(),
      email,
      password,
      name,
    }

    users.push(newUser)

    await writeFile(dbPath, JSON.stringify(users, null, 2))

    return NextResponse.json({ message: 'ثبت‌نام با موفقیت انجام شد' })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'خطای سرور در ثبت‌نام' },
      { status: 500 }
    )
  }
}
