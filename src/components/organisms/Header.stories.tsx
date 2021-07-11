import { Story, Meta } from '@storybook/react'

import { Header } from './Header'

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Normal = Template.bind({})
