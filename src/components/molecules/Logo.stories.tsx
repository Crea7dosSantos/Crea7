import { Story, Meta } from '@storybook/react'

import { Logo } from './Logo'

export default {
  title: 'Molecules/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div style={{ backgroundColor: 'black' }}>{story()}</div>],
} as Meta

const Template: Story = (args) => <Logo {...args} />

export const Normal = Template.bind({})
