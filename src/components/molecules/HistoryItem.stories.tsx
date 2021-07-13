import { Story, Meta } from '@storybook/react'
import { HistoryItem, HistoryItemProps } from './HistoryItem'

export default {
  title: 'Molecules/HistoryItem',
  component: HistoryItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (story) => (
      <div className="ml-0 lg:ml-12 lg:w-2/3 sticky bg-regal-dark-black text-white">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-3 h-full">
            <div className="container">
              <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">{story()}</div>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
} as Meta<HistoryItemProps>

const Template: Story<HistoryItemProps> = (args) => <HistoryItem {...args} />

export const Left = Template.bind({})
Left.args = {
  history: {
    id: '1',
    title: 'stale-while-revalidate対応のCDNでISRと同じような挙動を実現する',
    url: 'https://zenn.dev/catnose99/articles/08cf9e475004b2',
    topImage: {
      url: '',
      height: 400,
      width: 400,
    },
    tags: [
      {
        id: '1',
        name: 'walk',
      },
      {
        id: '2',
        name: 'forest',
      },
    ],
    createdAt: '2021-07-08T07:13:40.445Z',
    updatedAt: '',
    publishedAt: '',
  },
  position: 'left',
}

export const Right = Template.bind({})
Right.args = {
  history: {
    ...Left.args.history,
    url: 'https://qiita.com/',
  },
  position: 'right',
}
