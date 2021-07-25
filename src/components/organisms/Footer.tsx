import React from 'react'
import { Tag } from '../../types/tag'

export interface FooterProps {
  tags: Tag[]
}

export const Footer: React.VFC<FooterProps> = ({ tags }) => {
  return (
    <footer className="bg-regal-middle-black py-5 text-regal-footer-light-gray text-sm">
      <div className="m-auto w-11/12 sm:w-11/12 md:w-10/12 lg:w-9/12 2xl:w-7/12">
        <div>
          <h3 className="text-lg mb-2 text-center text-white">Tags</h3>
          <div className="">
            {tags.map((tag) => (
              <React.Fragment key={tag.id}>
                <a
                  href=""
                  className="text-sm inline-block mr-4 hover:text-white border-b hover:border-solid border-transparent hover:border-white pb-0"
                >
                  {tag.name}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-gray-600 text-center">
          <a
            href="https://github.com/Crea7dosSantos"
            className="hover:text-white border-b hover:border-solid border-transparent hover:border-white"
          >
            SourceCode
          </a>
          <p>© 2021, Crea7 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
