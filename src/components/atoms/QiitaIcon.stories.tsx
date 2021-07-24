import { Story, Meta } from '@storybook/react'
import { QiitaIcon, QiitaIconProps } from './QiitaIcon'

export default {
  title: 'Atoms/QiitaIcon',
  component: QiitaIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="text-white bg-regal-weight-black">{story()}</div>],
} as Meta

const Template: Story<QiitaIconProps> = (args) => <QiitaIcon {...args} />

export const Normal = Template.bind({})
Normal.args = {
  width: 18,
  height: 18,
}
