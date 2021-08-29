import React from 'react'
import Moment from 'react-moment'
import Layout from '../../components/template/layout'
import { NextPage } from 'next'
import { Article } from '../../types/article'
import { Category } from '../../types/category'
import { fetchArticles, fetchArticleById } from '../../service/article'
import { CategoryItem } from '../../components/molecules/CategoryItem'

type Props = {
  article: Article
  categories: Category[]
}

const ArticlePage: NextPage<Props> = ({ article, categories }) => {
  const categoriesByArticle = article.categories.map((category) => category.name)

  return (
    <Layout categories={categories} title={article.title} keyword={categoriesByArticle.join(' ')}>
      <div className="bg-white shadow-2xl sm:rounded-lg mb-6 tracking-wide">
        <div className="md:flex-shrink-0">
          <img
            src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
            alt="mountains"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 sm:rounded-lg sm:rounded-b-none"
          />
        </div>
        <div className="py-7 px-5 xs:px-10">
          <p className="text-gray-300">
            <Moment format="YYYY.MM.DD">{article.createdAt}</Moment>
          </p>
          <h1 className="font-bold text-3xl text-black tracking-normal pt-2 pb-2">
            {article.title}
          </h1>
          <div>
            {article.categories.map((category) => (
              <React.Fragment key={category.id}>
                <CategoryItem category={category} backgroundColor="black" rounded="rounded" />
              </React.Fragment>
            ))}
          </div>
          <div
            className="prose prose-lg prose-xl markdown text-black pt-7"
            dangerouslySetInnerHTML={{ __html: `${article.body}` }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await fetchArticles()
  const repos = await res.json()

  const paths = repos.contents.map((repo) => `/articles/${repo.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (contents) => {
  const id = contents.params.id
  const res = await fetchArticleById(id)

  const article = await res[0].json()
  const categories = await res[1].json()

  return {
    props: {
      article: article,
      categories: categories.contents,
    },
  }
}

export default ArticlePage
