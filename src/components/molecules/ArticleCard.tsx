import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Article } from '../../types/article'

export interface ArticleCardProps {
  article: Article
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <React.Fragment key={article.id}>
      <Link href="/articles/[:id]" as={`/articles/${article.id}`}>
        <a>
          <Image
            alt="Mountains"
            src="/mountains.jpg"
            width={700}
            height={450}
            layout={'intrinsic'}
            quality={100}
          />
          <h2>{article.title}</h2>
        </a>
      </Link>
      {article.tags.map((tag) => (
        <React.Fragment key={tag.id}>
          <span>{tag.name}</span>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}
