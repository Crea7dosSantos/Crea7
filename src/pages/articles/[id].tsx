import { NextPage } from 'next'
import { getArticles, getArticleById } from '../../service/article'
import { Article } from '../../types/article'

type Props = {
  article: Article
}

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <div>
        <p>記事作成日時: {article.createdAt}</p>
        <div dangerouslySetInnerHTML={{ __html: `${article.body}` }}></div>
      </div>
    </div>
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
