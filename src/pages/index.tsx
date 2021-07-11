import Layout from '../pages/layout'
import { NextPage } from 'next'
import { getArticles } from '../service/article'
import { Article } from '../types/article'
import { ArticleCardList } from '../components/organisms/ArticleCardList'
import Link from 'next/link'

type Props = {
  articles: Article[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <h2 className="py-11 font-normal text-4xl text-center md:text-left">TECH BLOG</h2>
      <ArticleCardList articles={articles} />
      <br />
      <Link href="/tmp/timeline">
        <a>Timeline</a>
      </Link>
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
