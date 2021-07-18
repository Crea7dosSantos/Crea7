import { NextPage } from 'next'
import { getArticles, getArticleById } from '../../service/article'
import { Article } from '../../types/article'
import Layout from '../layout'

type Props = {
  article: Article
}

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <Layout>
      <h1 className="py-12 text-4xl font-normal">{article.title}</h1>
      <div className="py-8 bg-regal-dark-black">
        <p>記事作成日時: {article.createdAt}</p>
        <div className="article" dangerouslySetInnerHTML={{ __html: `${article.body}` }}></div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await getArticles()
  const repos = await res.json()

  const paths = repos.contents.map((repo) => `/articles/${repo.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (contents) => {
  const id = contents.params.id

  const res = await getArticleById(id)
  const article = await res.json()

  return {
    props: {
      article: article,
    },
  }
}

export default ArticlePage
