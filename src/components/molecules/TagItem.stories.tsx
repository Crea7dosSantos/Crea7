import { Story, Meta } from '@storybook/react'
import { TagItem, TagItemProps } from './TagItem'

export default {
  title: 'Molecules/TagItem',
  component: TagItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="bg-regal-dark-black">{story()} </div>],
} as Meta<TagItemProps>

const Template: Story<TagItemProps> = (args) => <TagItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
  tag: {
    id: '1',
    name: 'forest',
  },
}
