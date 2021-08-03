import React from 'react'
import { NextPage } from 'next'
import { Category } from '../types/category'
import { Profile } from '../components/organisms/Profile'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'

type Props = {
  categories: Category[]
}

const Layout: NextPage<Props> = ({ children, categories }) => {
  return (
    <div>
      <Header />
      <div className="bg-black text-white">
        <div className="m-auto w-12/12 sm:w-11/12 lg:w-10/12 xl:w-11/12 2xl:w-9/12 pt-0 sm:pt-12 pb-12">
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
  )
}

export default Layout
