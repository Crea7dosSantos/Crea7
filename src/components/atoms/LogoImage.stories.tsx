import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LogoImage } from './LogoImage'

export default {
  title: 'Atoms/LogoImage',
  component: LogoImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => <LogoImage {...args} />

export const Normal = Template.bind({})
