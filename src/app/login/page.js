// src\app\login\page.js
import LoginForm from '@/components/Auth/LoginForm'
import * as T from '@/components/ui/Typography'

export const metadata = {
  title: 'ورود به حساب کاربری',
}

export default function LoginPage() {
  return (
    <main
      style={{
        padding: '40px 24px',
        direction: 'rtl',
        maxWidth: '500px',
        margin: '100px auto',
        textAlign: 'center',
      }}
    >
      <T.H1>ورود</T.H1>

      <T.P style={{ marginBottom: '30px', color: '#ccc' }}>
        برای دسترسی به سبد خرید و پیگیری سفارشات، وارد حساب خود شوید.
      </T.P>

      <LoginForm />
    </main>
  )
}
