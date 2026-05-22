// src\app\api\auth\me\route.js
import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'
import jwt from 'jsonwebtoken'

export async function GET(request) {
  try {
    const token = request.cookies.get('accessToken')?.value

    if (!token) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      )
    }

    let decoded

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    const dbPath = path.join(process.cwd(), 'src', 'data', 'users.json')
    const fileData = await readFile(dbPath, 'utf8')
    const users = JSON.parse(fileData)

    const user = users.find((u) => u.id === decoded.userId)

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('Me route error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
