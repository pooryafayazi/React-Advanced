// src/app/api/products/[id]/route.js
import { NextResponse } from 'next/server'

const mockProducts = [
  {
    id: 1,
    title: 'هدفونز مدل الف',
    price: 45000000,
    description: 'موس قدرتمند برای گیمینگ',
    image: '/images/headphones.webp',
  },
  {
    id: 2,
    title: 'موس گیمینگ',
    price: 2500000,
    description: 'موس با دقت بالا',
    image: '/images/mouse.webp',
  },
  {
    id: 3,
    title: 'کیبورد مکانیکال',
    price: 3800000,
    description: 'کیبورد با سوییچ‌های نرم',
    image: '/images/keyboard.webp',
  },
]

export async function GET(request, { params }) {
  const { id } = await params
  const productId = parseInt(id)
  const product = mockProducts.find((p) => p.id === productId)

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}
