import React from 'react'
import Moment from 'react-moment'
import { NextPage } from 'next'
import { fetchArticles, fetchArticleById } from '../../service/article'
import { Article } from '../../types/article'
import { TagItem } from '../../components/molecules/TagItem'
import { Tag } from '../../types/tag'

type Props = {
  article: Article
  tags: Tag[]
}

const ArticlePage: NextPage<Props> = ({ article, tags }) => {
  return (
    <div className="bg-regal-dark-black text-white">
      <div className="m-auto w-12/11 sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 py-12">
        <div className="lg:grid lg:grid-cols-6 lg:gap-10">
          <div className="col-start-1 col-span-4 sticky">
            <div className="bg-white shadow-2xl sm:rounded-lg mb-6 tracking-wide">
              <div className="md:flex-shrink-0">
                <img
                  src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
                  alt="mountains"
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-96 rounded-lg rounded-b-none"
                />
              </div>
              <div className="py-7 px-10">
                <p className="text-gray-300">
                  <Moment format="YYYY.MM.DD">{article.createdAt}</Moment>
                </p>
                <h1 className="font-bold text-3xl text-black tracking-normal pt-2 pb-2">
                  {article.title}
                </h1>
                <div className="">
                  {article.tags.map((tag) => (
                    <React.Fragment key={tag.id}>
                      <TagItem tag={tag} backgroundColor="black" fullRounded={false} />
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-sm text-gray-700 pt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad
                  architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt
                  porro amet ab debitis deleniti modi soluta similique... Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat
                  quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis
                  deleniti modi soluta similique... Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus
                  dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi
                  soluta similique... Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium
                  officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad
                  architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt
                  porro amet ab debitis deleniti modi soluta similique...Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat
                  quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis
                  deleniti modi soluta similique...Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus
                  dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi
                  soluta similique...Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium
                  officia maxime deserunt porro amet ab debitis deleniti modi soluta
                  similique...Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                  reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia
                  maxime deserunt porro amet ab debitis deleniti modi soluta similique...Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at
                  aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab
                  debitis deleniti modi soluta similique... consectetur adipisicing elit. Tempora
                  reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia
                  maxime deserunt porro amet ab debitis deleniti modi soluta similique...Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at
                  aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab
                  debitis deleniti modi soluta similique...Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus
                  dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi
                  soluta similique...Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium
                  officia maxime deserunt porro amet ab debitis deleniti modi soluta
                  similique...Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                  reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia
                  maxime deserunt porro amet ab debitis deleniti modi soluta similique...
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-7 sticky">
            <h3 className="text-2xl mb-2">Tags</h3>
            <p className="">
              {tags.map((tag) => (
                <React.Fragment key={tag.id}>
                  <TagItem tag={tag} backgroundColor="gray" fullRounded={false} />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
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
  const tags = await res[1].json()

  return {
    props: {
      article: article,
      tags: tags.contents,
    },
  }
}

export default ArticlePage
