import React from 'react'
import { NextPage } from 'next'
import { Tag } from '../types/tag'
import { TagItem } from '../components/molecules/TagItem'
import { Profile } from '../components/organisms/Profile'

type Props = {
  tags: Tag[]
}

const Layout: NextPage<Props> = ({ children, tags }) => {
  return (
    <div className="bg-regal-dark-black text-white">
      <div className="m-auto w-12/11 sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 py-12">
        <div className="lg:grid lg:grid-cols-6 lg:gap-10">
          <div className="col-start-1 col-span-4 sticky">{children}</div>
          <div className="col-start-5 col-end-7 sticky">
            <Profile />
            <h3 className="text-2xl mb-2 mt-5 text-center">Tags</h3>
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

export default Layout
