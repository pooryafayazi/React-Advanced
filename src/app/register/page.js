// src\app\register\page.js
import RegisterForm from '@/components/Auth/RegisterForm'
import * as T from '@/components/ui/Typography'

export const metadata = {
  title: 'ثبت‌نام در حساب کاربری',
}

export default function RegisterPage() {
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
      <T.H1>ثبت‌نام</T.H1>

      <T.P style={{ marginBottom: '30px', color: '#ccc' }}>
        با ثبت‌نام در سایت، می‌توانید به امکاناتِ کاملِ فروشگاه دسترسی داشته
        باشید.
      </T.P>

      <RegisterForm />
    </main>
  )
}
