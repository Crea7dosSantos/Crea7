import { Tag } from './tag'
import { TopImage } from './topImage'

export type Article = {
  id: string
  title: string
  body: string
  topImage: TopImage
  tags: [Tag]
  createdAt: string
  updatedAt: string
  publishedAt: string
}
