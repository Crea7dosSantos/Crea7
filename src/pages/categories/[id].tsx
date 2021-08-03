import React from 'react'
import Layout from '../layout'
import { NextPage } from 'next'
import { Category } from '../../types/category'
import { History } from '../../types/history'
import { fetchHistoriesByCategory } from '../../service/history'
import { fetchCategories } from '../../service/category'

type Props = {
  histories: History[]
  categories: Category[]
}

const CategoryPage: NextPage<Props> = ({ histories, categories }) => {
  return (
    <Layout categories={categories}>
      <h1>Category</h1>
      <div>
        {histories.map((history) => (
          <React.Fragment key={history.id}>
            <li>{history.title}</li>
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

  return {
    props: {
      histories: histories.contents,
      categories: categories.contents,
    },
  }
}

export default CategoryPage
