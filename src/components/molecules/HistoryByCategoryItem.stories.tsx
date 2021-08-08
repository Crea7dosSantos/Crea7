import { Story, Meta } from '@storybook/react'
import { HistoryByCategoryItem, HistoryByCategoryItemProps } from './HistoryByCategoryItem'

export default {
  title: 'Molecules/HistoryByCategoryItem',
  component: HistoryByCategoryItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (story) => (
      <div className="bg-black text-white pt-5">
        <div className="m-auto w-10/12">{story()}</div>
      </div>
    ),
  ],
} as Meta<HistoryByCategoryItemProps>

const Template: Story<HistoryByCategoryItemProps> = (args) => <HistoryByCategoryItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
  history: {
    id: '1',
    title: 'stale-while-revalidate対応のCDNでISRと同じような挙動を実現する',
    url: 'https://zenn.dev/catnose99/articles/08cf9e475004b2',
    topImage: {
      url: '',
      height: 400,
      width: 400,
    },
    categories: [
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
}
