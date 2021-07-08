import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ArticleCard, ArticleCardProps } from './ArticleCard'

export default {
  title: 'Organisms/ArticleCard',
  component: ArticleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  article: {
    id: 1,
    title: 'hogehge',
    tags: [],
  },
}
