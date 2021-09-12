import { Category } from './category'
import { TopImage } from './topImage'

export type Article = {
  id: string
  title: string
  body: string
  articleImageUrl: string
  topImage: TopImage
  categories: Category[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}
