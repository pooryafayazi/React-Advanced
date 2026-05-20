// src\components\Hyperlink\Hyperlink.stories.js
import Hyperlink from './Hyperlink'

export default {
  title: 'Components/Hyperlink',
  component: Hyperlink,
}

const Template = (args) => <Hyperlink {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://www.example.com',
  children: 'لینک مثال',
}
