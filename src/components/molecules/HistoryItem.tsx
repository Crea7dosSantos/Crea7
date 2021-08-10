import React from 'react'
import Link from 'next/link'
import { getHostFromURL, getHostIconFromURL, formatDate } from '../../lib/helper'
import { History } from '../../types/history'
import { CategoryItem } from './CategoryItem'

export interface HistoryItemProps {
  history: History
  position?: 'left' | 'right'
}

export const HistoryItem: React.VFC<HistoryItemProps> = ({ history, position = 'left' }) => {
  const hostname = history.url ? getHostFromURL(history.url) : null
  return position === 'left' ? (
    <React.Fragment key={history.id}>
      {/* left */}
      <div className="flex flex-row-reverse lg:contents">
        <div className="col-start-1 col-end-5 rounded-xl my-4 lg:my-0 ml-auto shadow-md">
          <Link href={history.url}>
            <a>
              <div className="mb-1.5 flex items-center">
                <img src={getHostIconFromURL(history.url)} alt="sns-icon" className="w-3.5 h-3.5" />
                <p className="ml-2 text-base text-regal-light-gray">
                  Posted on {hostname} / {formatDate(history.createdAt)}
                </p>
              </div>
            </a>
          </Link>
          <Link href={history.url}>
            <a className="inline-block mb-1.5">
              <h4 className="font-semibold text-lg xl:text-2xl inline border-b hover:border-solid border-transparent hover:border-regal-weight-gray">
                {history.title}
              </h4>
            </a>
          </Link>
          <div>
            {history.categories.map((category) => (
              <React.Fragment key={category.id}>
                <CategoryItem category={category} backgroundColor="gray" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="col-start-5 col-end-6 lg:mx-auto relative mr-6">
          <Link href={history.url}>
            <a>
              <div className="h-full w-3 flex items-center justify-center">
                <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
              </div>
              <div className="w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-weight-black border-solid border-2 border-regal-weight-gray shadow"></div>
            </a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment key={history.id}>
      {/* right */}
      <div className="flex lg:contents">
        <div className="col-start-5 col-end-6 mr-6 lg:mx-auto relative">
          <Link href={history.url}>
            <a>
              <div className="h-full w-3 flex items-center justify-center">
                <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
              </div>
              <div className="w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-weight-black border-solid border-2 border-regal-weight-gray shadow"></div>
            </a>
          </Link>
        </div>
        <div className="col-start-6 col-end-10 rounded-xl my-4 lg:my-0 mr-auto shadow-md">
          <Link href={history.url}>
            <a>
              <div className="mb-1.5 flex items-center">
                <img src={getHostIconFromURL(history.url)} alt="sns-icon" className="w-3.5 h-3.5" />
                <p className="ml-2 text-base text-regal-light-gray">
                  Posted on {hostname} / {formatDate(history.createdAt)}
                </p>
              </div>
            </a>
          </Link>
          <Link href={history.url}>
            <a className="inline-block mb-1.5">
              <h4 className="font-semibold text-lg xl:text-2xl inline border-b hover:border-solid border-transparent hover:border-regal-weight-gray">
                {history.title}
              </h4>
            </a>
          </Link>
          <div>
            {history.categories.map((category) => (
              <React.Fragment key={category.id}>
                <CategoryItem category={category} backgroundColor="gray" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
