// src\app\layout.js
import Providers from '@/components/Layout/Providers'
import Navbar from '../components/Layout/Navbar/Navbar'
import Footer from '../components/Layout/Footer/Footer'
import ReduxProvider from '@/lib/store/ReduxProvider'
import AuthInitializer from '@/components/Auth/AuthInitializer'
import StyledComponentsRegistry from '@/lib/registry'
import { ApolloWrapper } from '@/components/Layout/ApolloWrapper'

export const metadata = {
  title: {
    template: '%s | فروشگاه Shop',
    default: 'فروشگاه Shop | خرید آنلاین',
  },
  description: 'بهترین فروشگاه تمرینی با Next.js',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <StyledComponentsRegistry>
          <ReduxProvider>
            <ApolloWrapper>
              <AuthInitializer>
                <Providers>
                  <Navbar />
                  <main>{children}</main>
                  <Footer />
                </Providers>
              </AuthInitializer>
            </ApolloWrapper>
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
