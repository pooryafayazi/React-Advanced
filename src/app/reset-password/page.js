// src\app\reset-password\page.js
import ResetPasswordForm from '@/components/Auth/ResetPasswordForm'
import * as T from '@/components/ui/Typography'

export const metadata = {
  title: 'بازنشانی رمز عبور',
}

export default function ResetPasswordPage() {
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
      <T.H1>بازنشانی رمز عبور</T.H1>

      <T.P style={{ marginBottom: '30px', color: '#ccc' }}>
        توکنی که در کنسول چاپ شده را ابتدا در فایل //
        src\app\api\auth\reset-password\route.js وارد کنید و بعد از ان در این
        فیلد استفاده کنید{' '}
      </T.P>
      <ResetPasswordForm />
    </main>
  )
}
