import { Category } from './category'
import { TopImage } from './topImage'

export type History = {
  id: string
  title: string
  url: string
  topImage: TopImage
  categories: Category[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}
