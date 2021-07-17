import { Story, Meta } from '@storybook/react'
import { Profile } from './Profile'

export default {
  title: 'Organisms/Profile',
  component: Profile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white py-8 bg-regal-dark-black">{story()}</div>],
} as Meta

const Template: Story = (args) => <Profile {...args} />

export const Normal = Template.bind({})
