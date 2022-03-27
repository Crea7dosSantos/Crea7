import Link from 'next/link'
import React from 'react'
import { Category } from '../../types/category'

export interface FooterProps {
  categories: Category[]
}

export const Footer: React.VFC<FooterProps> = ({ categories }) => {
  return (
    <footer className="bg-regal-middle-black py-5 text-regal-footer-light-gray text-sm">
      <div className="m-auto w-11/12 sm:w-11/12 md:w-10/12 lg:w-9/12 2xl:w-7/12 text-center">
        <div>
          <h3 className="text-base mb-2 text-white">Categories</h3>
          <div>
            {categories.map((category) => (
              <React.Fragment key={category.id}>
                <Link href="/categories/[id]" as={`/categories/${category.id}`}>
                  <a className="text-sm inline-block mr-4 hover:text-white border-b hover:border-solid border-transparent hover:border-white pb-0">
                    {category.name}
                  </a>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-gray-600">
          <a
            href="https://github.com/Crea7dosSantos/Crea7"
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
