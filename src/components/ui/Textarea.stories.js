// src\components\ui\Textarea.stories.js
import Textarea from './Textarea'

export default {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],

  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

const Template = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Write your message...',
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Textarea disabled...',
  disabled: true,
}

