import React from 'react'
import { NextPage } from 'next'
import { getArticles } from '../service/article'
import { Article } from '../types/article'
import Layout from '../pages/layout'
import { ArticleCardList } from '../components/organisms/ArticleCardList'

type Props = {
  articles: Article[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <h2 className="py-12 text-4xl font-normal">TECH BLOG</h2>
      <ArticleCardList articles={articles} />
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
