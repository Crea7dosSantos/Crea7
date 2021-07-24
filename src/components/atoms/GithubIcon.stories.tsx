import { Story, Meta } from '@storybook/react'
import { GithubIcon, GithubIconProps } from './GithubIcon'

export default {
  title: 'Atoms/GithubIcon',
  component: GithubIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white bg-regal-weight-black">{story()}</div>],
} as Meta

const Template: Story<GithubIconProps> = (args) => <GithubIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: 18,
  height: 18,
}
