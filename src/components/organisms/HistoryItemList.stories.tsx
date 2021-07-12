import { Story, Meta } from '@storybook/react'
import { HistoryItemList, HistoryItemListProps } from './HistoryItemList'
import * as HistoryItemStories from '../molecules/HistoryItem.stories'

export default {
  title: 'Organisms/HistoryItemList',
  component: HistoryItemList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (story) => (
      <div className="text-white py-8 bg-regal-dark-black">
        <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 lg:my-24">
          {story()}
        </div>
      </div>
    ),
  ],
} as Meta<HistoryItemListProps>

const Template: Story<HistoryItemListProps> = (args) => <HistoryItemList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  historys: [
    { ...HistoryItemStories.Left.args.history },
    { ...HistoryItemStories.Right.args.history },
    { ...HistoryItemStories.Left.args.history },
    { ...HistoryItemStories.Right.args.history },
    { ...HistoryItemStories.Left.args.history },
    { ...HistoryItemStories.Right.args.history },
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  historys: [],
}
