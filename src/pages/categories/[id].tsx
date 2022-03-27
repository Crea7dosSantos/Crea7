import React from 'react'
import Layout from '../../components/template/layout'
import { NextPage } from 'next'
import { Category } from '../../types/category'
import { History } from '../../types/history'
import { fetchHistoriesByCategory } from '../../service/history'
import { fetchCategories } from '../../service/category'
import { HistoryByCategoryItem } from '../../components/molecules/HistoryByCategoryItem'

type Props = {
  histories: History[]
  categories: Category[]
  category: Category
  categoryId: string
}

const CategoryPage: NextPage<Props> = ({ histories, categories, category, categoryId }) => {
  return (
    <Layout
      categories={categories}
      url={`https://crea7dos3tos.com/categories/${categoryId}`}
      title={`Crea7 histories by ${category.name}`}
      keyword={category.name}
      topImageUrl="https://crea7-bucket.s3.ap-northeast-1.amazonaws.com/black.png"
    >
      <h1 className="mb-7 mt-10 sm:mt-0 text-3xl font-medium mx-5 sm:mx-0">{category.name}</h1>
      <div className="flex flex-col mx-5 sm:mx-0">
        {histories.map((history) => (
          <React.Fragment key={history.id}>
            <HistoryByCategoryItem history={history} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await fetchCategories()
  const repos = await res.json()

  const paths = repos.contents.map((repo) => `/categories/${repo.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (contents) => {
  const id = contents.params.id
  const res = await fetchHistoriesByCategory(id)

  const histories = await res[0].json()
  const categories = await res[1].json()
  const category = categories.contents.filter((category) => category.id === id)

  return {
    props: {
      histories: histories.contents,
      categories: categories.contents,
      category: category[0],
    },
  }
}

export default CategoryPage
