import React from 'react'
import { NextPage } from 'next'
import { Tag } from '../types/tag'
import { Profile } from '../components/organisms/Profile'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'

type Props = {
  tags: Tag[]
}

const Layout: NextPage<Props> = ({ children, tags }) => {
  return (
    <div>
      <Header />
      <div className="bg-black text-white">
        <div className="m-auto w-12/12 xs:w-11/12 sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 pt-0 xs:pt-12 pb-12">
          <div className="flex flex-col items-start lg:flex-row">
            <div className="w-full lg:w-2/3">{children}</div>
            <div className="w-full lg:w-1/3 ml-0 lg:ml-12 sticky lg:top-10 mt-5 lg:mt-0">
              <Profile />
            </div>
          </div>
        </div>
      </div>
      <Footer tags={tags} />
    </div>
  )
}

export default Layout
