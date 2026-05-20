// src\components\ui\Typography.stories.js
import { H1, H2, H3, H4, H5, P, Muted, B } from './Typography'

export default {
  title: 'UI/Typography',
  tags: ['autodocs'],
}

export const Headings = () => (
  <>
    <H1>متن قالب هدر یک</H1>
    <H2>متن قالب هدر دو</H2>
    <H3>متن قالب هدر سه</H3>
    <H4>متن قالب هدر چهار</H4>
    <H5>متن قالب هدر پنج</H5>
  </>
)

export const Paragraphs = () => (
  <>
    <P>این یک متن پاراگراف عادی است.</P>
    <Muted>این متن خاموش برای نکات راهنمایی است.</Muted>
    <B>این متن درشت هایلایت شده است.</B>
  </>
)
