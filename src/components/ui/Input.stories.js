// src\components\ui\Input.stories.js
import Input from './Input'

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Type something...',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  placeholder: 'Small input...',
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  placeholder: 'Large input...',
  size: 'lg',
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
}
