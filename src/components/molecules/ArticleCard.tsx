import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Moment from 'react-moment'
import { Article } from '../../types/article'

export interface ArticleCardProps {
  article: Article
}

export const ArticleCard: React.VFC<ArticleCardProps> = ({ article }) => {
  return (
    <React.Fragment key={article.id}>
      <div>
        <Link href="/articles/[:id]" as={`/articles/${article.id}`}>
          <a>
            <Image
              alt="Mountains"
              src="/mountains.jpg"
              width={767}
              height={500}
              layout={'intrinsic'}
              quality={100}
            />
          </a>
        </Link>
        <Moment format="YYYY/MM/DD">{article.createdAt}</Moment>
        <Link href="/articles/[:id]" as={`/articles/${article.id}`}>
          <a>
            <h2>{article.title}</h2>
          </a>
        </Link>
        {article.tags.map((tag) => (
          <React.Fragment key={tag.id}>
            <span>{tag.name}</span>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  )
}
