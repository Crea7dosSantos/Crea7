import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getHostFromURL, getHostIconFromURL, formatDate } from '../../lib/helper'
import { History } from '../../types/history'
import { TagItem } from './TagItem'

export interface HistoryItemProps {
  history: History
  position?: 'left' | 'right'
}

export const HistoryItem: React.VFC<HistoryItemProps> = ({ history, position = 'left' }) => {
  const hostname = history.url ? getHostFromURL(history.url) : null
  return position === 'left' ? (
    <React.Fragment key={history.id}>
      {/* left */}
      <div className="flex flex-row-reverse md:contents">
        <div className="col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md">
          <Link href={history.url}>
            <a>
              <div className="mb-1.5 flex items-center">
                <Image
                  alt="icon"
                  src={getHostIconFromURL(history.url)}
                  width={14}
                  height={14}
                  quality={100}
                />
                <p className="ml-2 text-base text-regal-light-gray">
                  Posted on {hostname} / {formatDate(history.createdAt)}
                </p>
              </div>
            </a>
          </Link>
          <Link href={history.url}>
            <a className="inline-block mb-1.5">
              <h4 className="font-semibold text-lg lg:text-2xl inline border-b hover:border-solid border-transparent hover:border-regal-dark-gray">
                {history.title}
              </h4>
            </a>
          </Link>
          <div>
            {history.tags.map((tag) => (
              <React.Fragment key={tag.id}>
                <TagItem tag={tag} backgroundColor="gray" fullRounded />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-6">
          <Link href={history.url}>
            <a>
              <div className="h-full w-3 flex items-center justify-center">
                <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
              </div>
              <div className="w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow"></div>
            </a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment key={history.id}>
      {/* right */}
      <div className="flex md:contents">
        <div className="col-start-5 col-end-6 mr-6 md:mx-auto relative">
          <Link href={history.url}>
            <a>
              <div className="h-full w-3 flex items-center justify-center">
                <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
              </div>
              <div className="w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow"></div>
            </a>
          </Link>
        </div>
        <div className="col-start-6 col-end-10 rounded-xl my-4 mr-auto shadow-md">
          <Link href={history.url}>
            <a>
              <div className="mb-1.5 flex items-center">
                <Image
                  alt="icon"
                  src={getHostIconFromURL(history.url)}
                  width={14}
                  height={14}
                  quality={100}
                />
                <p className="ml-2 text-base text-regal-light-gray">
                  Posted on {hostname} / {formatDate(history.createdAt)}
                </p>
              </div>
            </a>
          </Link>
          <Link href={history.url}>
            <a className="inline-block mb-1.5">
              <h4 className="font-semibold text-lg lg:text-2xl inline border-b hover:border-solid border-transparent hover:border-regal-dark-gray">
                {history.title}
              </h4>
            </a>
          </Link>
          <div>
            {history.tags.map((tag) => (
              <React.Fragment key={tag.id}>
                <TagItem tag={tag} backgroundColor="gray" fullRounded />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
