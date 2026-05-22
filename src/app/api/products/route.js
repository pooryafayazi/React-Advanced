// src/app/api/products/route.js
import { NextResponse } from 'next/server'
const mockProducts = [
  {
    id: 1,
    title: 'هدفونز مدل الف',
    price: 45000000,
    description: 'موس قدرتمند برای گیمینگ',
    image: 'images/headphones.webp',
  },
  {
    id: 2,
    title: 'موس گیمینگ',
    price: 2500000,
    description: 'موس با دقت بالا',
    image: 'images/mouse.webp',
  },
  {
    id: 3,
    title: 'کیبورد مکانیکال',
    price: 3800000,
    description: 'کیبورد با سوییچ‌های نرم',
    image: 'images/keyboard.webp',
  },
]

export async function GET() {
  return NextResponse.json(mockProducts)
}
