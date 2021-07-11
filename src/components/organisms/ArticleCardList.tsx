import React from 'react'
import { ArticleCard } from '../molecules/ArticleCard'
import { Article } from '../../types/article'

export interface ArticleCardListProps {
  articles: Article[]
}

export const ArticleCardList: React.VFC<ArticleCardListProps> = ({ articles }) => {
  if (articles.length <= 1) {
    return (
      <div>
        <div className="title-message">You have no tasks</div>
        <div className="subtitle-message">Sit back and relax</div>
      </div>
    )
  }

  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
