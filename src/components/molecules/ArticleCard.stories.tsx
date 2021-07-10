import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ArticleCard, ArticleCardProps } from './ArticleCard'
import { Article } from '../../types/article'

export default {
  title: 'Molecules/ArticleCard',
  component: ArticleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<ArticleCardProps>

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />

export const Normal = Template.bind({})
export const ArticleMock: Article = {
  id: '1',
  title: 'hoge',
  body: 'hoge',
  topImage: {
    url: '',
    height: 400,
    width: 400,
  },
  tags: [],
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
}
Normal.args = {
  article: ArticleMock,
}
