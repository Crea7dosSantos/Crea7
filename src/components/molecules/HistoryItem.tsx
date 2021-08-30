import React from 'react'
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
        <div className="col-start-1 col-end-5 rounded-xl my-4 lg:my-0 ml-auto shadow-md cursor-pointer">
          <a href={history.url} title={history.title}>
            <div className="mb-1.5 flex items-center">
              <img src={getHostIconFromURL(history.url)} width="14" height="14" alt="sns-icon" />
              <p className="ml-2 text-base text-regal-light-gray">
                Posted on {hostname} / {formatDate(history.createdAt)}
              </p>
            </div>
          </a>
          <a href={history.url} title={history.title} className="inline-block mb-1.5">
            <h2 className="font-semibold text-lg xl:text-2xl inline border-b hover:border-solid border-transparent hover:border-regal-weight-gray">
              {history.title}
            </h2>
          </a>
          <div>
            {history.categories.map((category) => (
              <React.Fragment key={category.id}>
                <CategoryItem category={category} backgroundColor="gray" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="col-start-5 col-end-6 lg:mx-auto relative mr-6">
          <a>
            <div className="h-full w-3 flex items-center justify-center">
              <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
            </div>
            <div className="w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-weight-black border-solid border-2 border-regal-weight-gray shadow"></div>
          </a>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment key={history.id}>
      {/* right */}
      <div className="flex lg:contents">
        <div className="col-start-5 col-end-6 mr-6 lg:mx-auto relative">
          <a href={history.url} title={history.title}>
            <div className="h-full w-3 flex items-center justify-center">
              <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
            </div>
            <div className="w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-weight-black border-solid border-2 border-regal-weight-gray shadow"></div>
          </a>
        </div>
        <div className="col-start-6 col-end-10 rounded-xl my-4 lg:my-0 mr-auto shadow-md cursor-pointer">
          <a href={history.url} title={history.title}>
            <div className="mb-1.5 flex items-center">
              <img src={getHostIconFromURL(history.url)} width="14" height="14" alt="sns-icon" />
              <p className="ml-2 text-base text-regal-light-gray">
                Posted on {hostname} / {formatDate(history.createdAt)}
              </p>
            </div>
          </a>
          <a href={history.url} title={history.title} className="inline-block mb-1.5">
            <h2 className="font-semibold text-lg xl:text-2xl inline border-b hover:border-solid border-transparent hover:border-regal-weight-gray">
              {history.title}
            </h2>
          </a>
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
