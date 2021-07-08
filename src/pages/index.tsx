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
      <h2 className="py-12 text-4xl font-normal">TECH BLOG</h2>
      <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
        {articles.map((article) => (
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
