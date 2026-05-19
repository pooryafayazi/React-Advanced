// src\components\ui\Button.stories.js
import Button from './Button'

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
}

const Template = (args) => <Button {...args} />

export const Solid = Template.bind({})
Solid.args = {
  children: 'Solid Button',
  variant: 'solid',
  size: 'md',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small Button',
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large Button',
  size: 'lg',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
}
