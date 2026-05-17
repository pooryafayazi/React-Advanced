// src\app\page.js
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/home/HeroSection'
import HomeBackground from '@/components/home/HomeBackground'

import { products } from '../data/products'

const categories = [
  { slug: 'electronics', title: 'الکترونیک' },
  { slug: 'fashion', title: 'مد و پوشاک' },
  { slug: 'home-kitchen', title: 'خانه و آشپزخانه' },
  { slug: 'books', title: 'کتاب' },
]

const featured = products.filter((p) => p.tags.includes('featured'))

export default function Home() {
  return (
    <HomeBackground>
      <HeroSection />

      <main style={{ maxWidth: 1200, margin: '0 auto' }}>
        <section style={{ marginBottom: 32 }}>
          <h1 style={{ margin: 0 }}>Shop</h1>
          <p style={{ color: '#ccc' }}>
            فروشگاه تمرینی با Next.js + styled-components
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2>دسته‌بندی‌ها</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/shop?category=${c.slug}`}
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '8px 14px',
                  borderRadius: 999,
                  color: '#fff',
                  textDecoration: 'none',
                  backdropFilter: 'blur(6px)',
                }}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2>ویژه‌ها</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {featured.map((p) => (
              <article
                key={p.id}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain', borderRadius: '12px' }}
                />

                <h3>{p.title}</h3>
                <p style={{ color: '#ccc' }}>{p.shortDescription}</p>

                <b>{p.price.toLocaleString('fa-IR')} تومان</b>
              </article>
            ))}
          </div>
        </section>
      </main>
    </HomeBackground>
  )
}
