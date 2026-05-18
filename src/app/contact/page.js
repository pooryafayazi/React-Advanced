// src\app\contact\page.js
import ContactForm from '@/components/forms/ContactForm'
import * as T from '@/components/ui/Typography'

export const metadata = {
  title: 'تماس با ما',
}

export default function ContactPage() {
  return (
    <main
      style={{
        padding: '40px 24px',
        direction: 'rtl',
        maxWidth: '700px',
        margin: 'auto',
      }}
    >
      <T.H1>تماس با ما</T.H1>

      <T.P>اگر سوالی در مورد محصولات یا پروژه دارید، با ما در تماس باشید.</T.P>

      <ContactForm />

      <section style={{ marginTop: '40px' }}>
        <T.H2>اطلاعات تماس مستقیم:</T.H2>

        <ul style={{ paddingRight: 18, color: '#eee', lineHeight: 1.8 }}>
          <li>
            ایمیل: <a href="mailto:support@shop.com">support@shop.com</a>
          </li>
          <li>تلفن: ۰۹۱۲۱۲۳۴۵۶۷</li>
          <li>آدرس: تهران، خیابان آزادی، پلاک ۲۳</li>
        </ul>
      </section>
    </main>
  )
}
