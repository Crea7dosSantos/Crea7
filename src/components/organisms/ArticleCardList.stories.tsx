import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ArticleCardList, ArticleCardListProps } from './ArticleCardList'
import { ArticleMock } from '../molecules/ArticleCard.stories'

export default {
  title: 'Organisms/ArticleCardList',
  component: ArticleCardList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<ArticleCardListProps>

const Template: Story<ArticleCardListProps> = (args) => <ArticleCardList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  articles: [
    { ...ArticleMock, id: '1', title: 'タイトル1だよ' },
    { ...ArticleMock, id: '2', title: 'タイトル2だよ' },
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  articles: [],
}
