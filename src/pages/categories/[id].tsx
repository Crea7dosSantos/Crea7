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
  category: Category
}

const CategoryPage: NextPage<Props> = ({ histories, categories, category }) => {
  return (
    <Layout categories={categories}>
      <h1>{category.name}</h1>
      <div className="flex flex-col">
        {histories.map((history) => (
          <React.Fragment key={history.id}>
            <div className="flex items-center py-6 mb-border-2 border-b border-gray">
              <img
                src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                alt="aji"
                className="w-24 h-24 object-cover rounded mr-6"
              />
              <p>{history.title}</p>
            </div>
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
