import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { Category } from '../../types/category'
import { Profile } from '../../components/organisms/Profile'
import { Header } from '../../components/organisms/Header'
import { Footer } from '../../components/organisms/Footer'

type Props = {
  categories: Category[]
  url: string
  title: string
  keyword: string
  topImageUrl: string
}

const Layout: NextPage<Props> = ({ children, categories, url, title, keyword, topImageUrl }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={`Crea7 ${keyword}`}></meta>
        <meta
          name="description"
          content="Crea7 timeline. web/iOS application developer. This is my history. Follow @crea7_3tos for daily updates."
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crea7_3tos" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={topImageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Crea7 Timeline" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="bg-black text-white flex-1">
          <div className="m-auto w-12/12 sm:w-11/12 lg:w-9/12 xl:w-11/12 2xl:w-9/12 pt-0 sm:pt-12 pb-12">
            <div className="flex flex-col items-start xl:flex-row">
              <div className="w-full xl:w-2/3">{children}</div>
              <div className="w-full xl:w-1/3 ml-0 xl:ml-12 sticky xl:top-10 mt-5 xl:mt-0">
                <Profile />
              </div>
            </div>
          </div>
        </div>
        <Footer categories={categories} />
      </div>
    </div>
  )
}

export default Layout
