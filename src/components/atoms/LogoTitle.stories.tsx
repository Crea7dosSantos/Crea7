import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LogoTitle } from './LogoTitle'

export default {
  title: 'Atoms/LogoTitle',
  component: LogoTitle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => <LogoTitle {...args} />

export const Normal = Template.bind({})
