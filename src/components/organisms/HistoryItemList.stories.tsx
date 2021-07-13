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
    {
      ...HistoryItemStories.Left.args.history,
      id: '1',
      title: 'Lerna + viteで他パッケージの依存関係をうまく解決できないときの確認ポイント',
    },
    {
      ...HistoryItemStories.Right.args.history,
      id: '2',
      title: 'Notion APIのLimit（リクエスト制限）で気になったことまとめ',
    },
    {
      ...HistoryItemStories.Left.args.history,
      id: '3',
      title: 'GAEのデプロイでquotas were exceededエラーが発生したときの対処法',
      url: 'https://c7ds-log.microcms.io/api/v1',
    },
    {
      ...HistoryItemStories.Right.args.history,
      id: '4',
      title: 'GAEのデプロイでquotas were exceededエラーが発生したときの対処法',
    },
    {
      ...HistoryItemStories.Left.args.history,
      id: '5',
      title:
        '【React】特定の要素が画面内 / 画面より上 / 画面より下のどこにあるかを調べるカスタムフック',
    },
    {
      ...HistoryItemStories.Right.args.history,
      id: '6',
      title: 'Next.jsアプリをVercelからGCPに移行した話',
    },
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  historys: [],
}
