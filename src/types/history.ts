import { Tag } from './tag'
import { TopImage } from './topImage'

export type History = {
  id: string
  title: string
  url: string
  topImage: TopImage
  tags: Tag[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}
