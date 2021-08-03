import { Story, Meta } from '@storybook/react'
import { CategoryItem, CategoryItemProps } from './CategoryItem'

export default {
  title: 'Molecules/CategoryItem',
  component: CategoryItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="bg-white">{story()} </div>],
} as Meta<CategoryItemProps>

const Template: Story<CategoryItemProps> = (args) => <CategoryItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
  category: {
    id: '1',
    name: 'forest',
  },
}
