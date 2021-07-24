import { Story, Meta } from '@storybook/react'
import { EMailIcon, EMailIconProps } from './EMailIcon'

export default {
  title: 'Atoms/EMailIcon',
  component: EMailIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white bg-regal-weight-black">{story()}</div>],
} as Meta

const Template: Story<EMailIconProps> = (args) => <EMailIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: 18,
  height: 18,
}
