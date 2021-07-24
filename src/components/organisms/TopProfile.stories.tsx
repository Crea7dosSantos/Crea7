import { Story, Meta } from '@storybook/react'
import { TopProfile } from './TopProfile'

export default {
  title: 'Organisms/TopProfile',
  component: TopProfile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white py-8 bg-regal-weight-black">{story()}</div>],
} as Meta

const Template: Story = (args) => <TopProfile {...args} />

export const Normal = Template.bind({})
