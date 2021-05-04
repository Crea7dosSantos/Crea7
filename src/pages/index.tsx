import Head from "next/head"
import Image from "next/image"
import React from "react"
import { getArticles } from "../../service/article"
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ articles }) {
  return (
    <div>
      <h2>最新の記事</h2>
      <div>
        {articles.map(article => (
          <React.Fragment key={article.id}>
            <Link href="/articles/[id]" as={`articles/${article.id}`}>
              <a>
                <h2>{article.title}</h2>
              </a>
            </Link>
             {article.tags.map(tag => (
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