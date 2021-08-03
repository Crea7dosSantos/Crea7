import { Story, Meta } from '@storybook/react'
import { ArticleCard, ArticleCardProps } from './ArticleCard'

export default {
  title: 'Molecules/ArticleCard',
  component: ArticleCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<ArticleCardProps>

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  article: {
    id: '1',
    title: 'hoge',
    body: 'hoge',
    topImage: {
      url: '',
      height: 400,
      width: 400,
    },
    categories: [],
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
  },
}
