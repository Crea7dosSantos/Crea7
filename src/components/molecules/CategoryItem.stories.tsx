import { Story, Meta } from '@storybook/react'
import { CategoryItem, CategoryItemProps } from './CategoryItem'

export default {
  title: 'Molecules/CategoryItem',
  component: CategoryItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(story) => <div className="bg-white text-white">{story()} </div>],
} as Meta<CategoryItemProps>

const Template: Story<CategoryItemProps> = (args) => <CategoryItem {...args} />

export const Gray = Template.bind({})
Gray.args = {
  category: {
    id: '1',
    name: 'forest',
  },
  backgroundColor: 'gray',
}

export const Black = Template.bind({})
Black.args = {
  category: {
    id: '1',
    name: 'forest',
  },
  backgroundColor: 'black',
  rounded: 'rounded',
}
