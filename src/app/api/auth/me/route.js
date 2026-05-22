// src\app\api\auth\me\route.js
import { NextResponse } from 'next/server'
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

    const user = {
      id: decoded.userId,
      email: decoded.email,
      name: 'Test User',
    }

    return NextResponse.json({
      authenticated: true,
      user,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
