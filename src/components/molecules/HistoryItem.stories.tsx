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

export const Normal = Template.bind({})
Normal.args = {
  history: {
    id: '1',
    title: 'stale-while-revalidate対応のCDNでISRと同じような挙動を実現する',
    url: 'https://google.com',
    topImage: {
      url: '',
      height: 400,
      width: 400,
    },
    tags: [],
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  },
}
