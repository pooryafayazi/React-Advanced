// src\app\about\page.js
import * as T from '@/components/ui/Typography'
export const metadata = {
  title: 'درباره ما',
}
export default function About() {
  return (
    <>
      <main
        style={{
          padding: '40px 24px',
          direction: 'rtl',
          maxWidth: '900px',
          margin: 'auto',
        }}
      >
        <T.H1>درباره ما</T.H1>

        <section style={{ marginBottom: '30px' }}>
          <T.P>
            فروشگاه <strong>Shop</strong> یک پلتفرم فروشگاهی تمرینی است که برای
            یادگیری و پیاده‌سازی فناوری‌های <b>Next.js</b>، <b>React</b> و{' '}
            <b>Styled‑Components</b> طراحی شده است. هدف ما ساخت یک نمونه فروشگاه
            کاملاً واقعی از نظر تجربه کاربری و معماری Frontend است.
          </T.P>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <T.H2>چشم‌انداز ما</T.H2>
          <T.P>
            ما باور داریم که ترکیب سادگی، سرعت و طراحی تمیز می‌تواند تجربه خرید
            آنلاین را لذت‌بخش کند. هدف ما ارائه نمونه‌ای از یک برنامه فروشگاهی
            است که:
          </T.P>
          <ul style={{ paddingRight: 18, color: '#eee', lineHeight: 1.8 }}>
            <li>به‌صورت کامل روی معماری React مبتنی است.</li>
            <li>کاملاً واکنش‌گرا و سازگار با موبایل است.</li>
            <li>
              از Styled‑Components برای مدیریت تم‌ها و استایل‌ها استفاده می‌کند.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <T.H2>تاریخچه پروژه</T.H2>
          <T.P>
            پروژه Shop در سال 2026 توسط <b>Poorya Fayazi</b> به‌عنوان نمونه
            تمرینی توسعه Frontend آغاز شد. نسخه فعلی بر روی Next.js App Router
            ساخته شده و کامپوننت‌های Reusable طراحی شده‌اند تا در پروژه‌های
            بزرگ‌تر استفاده شوند.
          </T.P>
        </section>

        <section>
          <T.H2>تک‌تک فناوری‌ها در این پروژه:</T.H2>
          <ul style={{ paddingRight: 18, color: '#eee', lineHeight: 1.8 }}>
            <li>Next.js 14 (App Directory)</li>
            <li>React 18</li>
            <li>Styled‑Components</li>
            <li>React‑Icons</li>
            <li>SSR و CSR برای صفحات مختلف</li>
          </ul>
        </section>
      </main>
    </>
  )
}
