import { Story, Meta } from '@storybook/react'
import { MediumIcon, MediumIconProps } from './MediumIcon'

export default {
  title: 'Atoms/MediumIcon',
  component: MediumIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white bg-regal-dark-black">{story()}</div>],
} as Meta

const Template: Story<MediumIconProps> = (args) => <MediumIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: 18,
  height: 18,
}
