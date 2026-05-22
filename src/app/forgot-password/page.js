// src/app/forgot-password/page.js

import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm'
import * as T from '@/components/ui/Typography'

export const metadata = { title: 'فراموشی رمز عبور' }

export default function ForgotPasswordPage() {
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
      <T.H1>بازیابی رمز عبور</T.H1>
      <T.P style={{ marginBottom: '30px', color: '#ccc' }}>
        ایمیل خود را وارد کنید تا لینک تغییر رمز برایتان ارسال شود.
      </T.P>
      <ForgotPasswordForm />
    </main>
  )
}
