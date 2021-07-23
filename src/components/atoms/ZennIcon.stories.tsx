import { Story, Meta } from '@storybook/react'
import { ZennIcon, ZennIconProps } from './ZennIcon'

export default {
  title: 'Atoms/ZennIcon',
  component: ZennIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white bg-regal-dark-black">{story()}</div>],
} as Meta

const Template: Story<ZennIconProps> = (args) => <ZennIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: 18,
  height: 18,
}
