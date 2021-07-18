import { Story, Meta } from '@storybook/react'
import { TwitterIcon, TwitterIconProps } from './TwitterIcon'

export default {
  title: 'Atoms/TwitterIcon',
  component: TwitterIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white bg-regal-dark-black">{story()}</div>],
} as Meta

const Template: Story<TwitterIconProps> = (args) => <TwitterIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: 18,
  height: 18,
}
