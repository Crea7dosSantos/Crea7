import React from 'react'
import { NextPage } from 'next'
import { Tag } from '../types/tag'
import { TagItem } from '../components/molecules/TagItem'
import { Profile } from '../components/organisms/Profile'
import { Header } from '../components/organisms/Header'

type Props = {
  tags: Tag[]
}

const Layout: NextPage<Props> = ({ children, tags }) => {
  return (
    <div>
      <Header />
      <div className="bg-black text-white">
        <div className="m-auto w-12/11 sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 py-12">
          <div className="flex flex-col items-start lg:flex-row">
            <div className="w-full lg:w-2/3">{children}</div>
            <div className="w-full lg:w-1/3 ml-0 lg:ml-12 sticky lg:top-10 mt-5 lg:mt-0">
              <Profile />
            </div>
          </div>
          <h3 className="text-2xl mb-2 mt-5 text-center">Tags</h3>
          <div>
            {tags.map((tag) => (
              <React.Fragment key={tag.id}>
                <TagItem tag={tag} backgroundColor="gray" fullRounded={false} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
