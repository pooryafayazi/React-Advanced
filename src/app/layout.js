// src\app\layout.js
import Providers from '@/components/layout/Providers'
import Navbar from '../components/layout/Navbar/Navbar'
import Footer from '../components/layout/Footer/Footer'

export const metadata = {
  title: {
    template: '%s | فروشگاه Shop',
    default: 'فروشگاه Shop | خرید آنلاین',
  },
  description: 'بهترین فروشگاه تمرینی با Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
