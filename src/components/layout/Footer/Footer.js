// src\components\layout\Footer\Footer.js
'use client'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from 'react-icons/fa'
import {
  FooterWrapper,
  Container,
  TopSection,
  Column,
  Logo,
  Title,
  List,
  ListItemWrapper,
  ListItem,
  SocialIcon,
  BottomSection,
  Socials,
  LegalLinks,
} from './Footer.styles'

const footerLinks = [
  { title: 'سفارش دادن', link: '/' },
  { title: 'گزینه های حمل و نقل', link: '/' },
  { title: 'پیگیری بسته', link: '/' },
]

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <TopSection>
          <Column>
            <Logo href="/">
              <Image
                src="/logo3.png"
                alt="GapShop Logo"
                width={0}
                height={0}
                style={{ width: 'auto', height: '60px' }}
                priority
              />
            </Logo>
            <p>© Poorya Fayazi 2026</p>
          </Column>

          <Column>
            <Title>حساب</Title>
            <List>
              {footerLinks.map((item) => (
                <ListItemWrapper key={item.title} href={item.link}>
                  <ListItem>{item.title}</ListItem>
                </ListItemWrapper>
              ))}
            </List>
          </Column>

          <Column>
            <Title>شرکت</Title>
            <List>
              <ListItemWrapper href="/">
                <ListItem>تامین مالی</ListItem>
              </ListItemWrapper>
              <ListItemWrapper href="/">
                <ListItem>بازیافت</ListItem>
              </ListItemWrapper>
              <ListItemWrapper href="/">
                <ListItem>سیاست بازگشت</ListItem>
              </ListItemWrapper>
            </List>
          </Column>

          <Column>
            <Title>منابع</Title>
            <List>
              <ListItemWrapper href="/">
                <ListItem>کمک</ListItem>
              </ListItemWrapper>
              <ListItemWrapper href="/">
                <ListItem>حساب شما</ListItem>
              </ListItemWrapper>
            </List>
          </Column>
        </TopSection>

        <BottomSection>
          <Socials>
            <SocialIcon href="/">
              <FaFacebookF />
            </SocialIcon>

            <SocialIcon href="/">
              <FaGoogle />
            </SocialIcon>

            <SocialIcon href="/">
              <FaTwitter />
            </SocialIcon>

            <SocialIcon href="/">
              <FaGithub />
            </SocialIcon>
          </Socials>

          <LegalLinks>حریم خصوصی | شرایط</LegalLinks>
        </BottomSection>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
