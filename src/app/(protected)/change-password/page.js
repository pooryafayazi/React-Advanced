// src\app\(protected)\change-password\page.js
import ChangePasswordForm from '@/components/Auth/ChangePasswordForm'
import * as T from '@/components/ui/Typography'

export const metadata = {
  title: 'تغییر رمز عبور',
}

export default function ChangePasswordPage() {
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
      <T.H1>تغییر رمز عبور</T.H1>

      <T.P style={{ marginBottom: '30px', color: '#ccc' }}>
        برای امنیتِ بیشتر، رمز عبورِ خود را به صورتِ دوره‌ای تغییر دهید.
      </T.P>

      <ChangePasswordForm />
    </main>
  )
}
