// import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { getArticles } from '../service/article'

export default function Home({ articles }) {
  return (
    <div>
      <h2 className="text-7xl text-red-500 font-bold">最新の記事</h2>
      <div>
        {articles.map((article) => (
          <React.Fragment key={article.id}>
            <Link href="/articles/[:id]" as={`/articles/${article.id}`}>
              <a>
                <img
                  src={article.topImage.url}
                  alt=""
                  width={200}
                  height={100}
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
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await getArticles()
  const data = await res.json()

  return {
    props: {
      articles: data.contents
    }
  }
}

{
  /* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={article.topImage.url} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div> */
}
