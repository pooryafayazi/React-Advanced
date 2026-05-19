// src\app\page.js
import Link from 'next/link'
import Image from 'next/image'
import * as T from '@/components/ui/Typography'
import HeroSection from '@/components/Home/HeroSection'
import HomeBackground from '@/components/Home/HomeBackground'

import { products } from '../data/products'

const categories = [
  { slug: 'electronics', title: 'الکترونیک' },
  { slug: 'fashion', title: 'مد و پوشاک' },
  { slug: 'home-kitchen', title: 'خانه و آشپزخانه' },
  { slug: 'books', title: 'کتاب' },
]

export const metadata = {
  title: 'صفحه اصلی',
}

const featured = products.filter((p) => p.tags.includes('featured'))

export default function Home() {
  return (
    <>
      <HomeBackground>
        <HeroSection />

        <main style={{ maxWidth: 1200, margin: '0 auto' }}>
          <section style={{ marginBottom: 32 }}>
            <T.H1>Shop</T.H1>
            <T.P>فروشگاه تمرینی با Next.js + styled-components</T.P>
          </section>

          <section style={{ marginBottom: 32 }}>
            <T.H2>دسته‌بندی‌ها</T.H2>
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
            <T.H2>ویژه‌ها</T.H2>

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

                  <T.H3>{p.title}</T.H3>
                  <T.P>{p.shortDescription}</T.P>

                  <T.B>{p.price.toLocaleString('fa-IR')} تومان</T.B>
                </article>
              ))}
            </div>
          </section>
        </main>
      </HomeBackground>
    </>
  )
}
