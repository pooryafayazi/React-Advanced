// src\components\ui\Typography.stories.js
import { H1, H2, H3, P, Muted, B } from './Typography'

export default {
  title: 'UI/Typography',
  tags: ['autodocs'],
}

export const Headings = () => (
  <>
    <H1>Heading One</H1>
    <H2>Heading Two</H2>
    <H3>Heading Three</H3>
  </>
)

export const Paragraphs = () => (
  <>
    <P>This is a regular paragraph text.</P>
    <Muted>This is muted text for hints.</Muted>
    <B>This is bold highlighted text.</B>
  </>
)
