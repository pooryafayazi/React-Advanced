// src\components\home\HeroSection.js
'use client'

import {
  HeroWrapper,
  Overlay,
  HeroContainer,
  TextContent,
  Eyebrow,
  Title,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
  TrustBadges,
  Badge,
  Visual,
} from './HeroSection.styles'

export default function HeroSection() {
  return (
    <HeroWrapper>
      <Overlay />

      <HeroContainer>
        {/* TEXT */}
        <TextContent>
          <Eyebrow>تکنولوژی پریمیوم · سطح بالاتر</Eyebrow>

          <Title>
            تکنولوژی <span>بدون محدودیت</span>
          </Title>

          <Description>
            جدیدترین گجت‌ها و محصولات هوشمند با طراحی مدرن، کیفیت بالا و
            تجربه‌ای متفاوت از خرید آنلاین.
          </Description>

          <Actions>
            <PrimaryButton href="/products">خرید کنید</PrimaryButton>

            <SecondaryButton href="/about">درباره فروشگاه</SecondaryButton>
          </Actions>

          <TrustBadges>
            <Badge>🚚 ارسال سریع</Badge>
            <Badge>🛡 ضمانت اصالت</Badge>
            <Badge>📞 پشتیبانی ۲۴/۷</Badge>
          </TrustBadges>
        </TextContent>
      </HeroContainer>
    </HeroWrapper>
  )
}
