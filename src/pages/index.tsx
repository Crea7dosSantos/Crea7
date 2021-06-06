import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { getArticles } from '../service/article'
import { Article } from '../types/article'
import Image from 'next/image'
import Layout from '../pages/layout'

type Props = {
  articles: Article[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <h2 className="text-7xl text-red-500 font-bold">最新の記事はこれ</h2>
      <div>
        {articles.map((article) => (
          <React.Fragment key={article.id}>
            <Link href="/articles/[:id]" as={`/articles/${article.id}`}>
              <a>
                <Image
                  alt="Mountains"
                  src="/mountains.jpg"
                  width={300}
                  height={300}
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
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await getArticles()
  const data = await res.json()

  return {
    props: {
      articles: data.contents,
    },
  }
}

export default Home
