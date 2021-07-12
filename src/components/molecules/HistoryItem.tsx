import React from 'react'
import { getHostFromURL } from '../../lib/helper'
// import Link from 'next/link'
import { History } from '../../types/history'
import Image from 'next/image'

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
          <div className="mb-3 flex items-center">
            <Image
              alt="icon"
              src={hostname === 'zenn.dev' ? '/zenn-favicon.png' : '/qiita-favicon.png'}
              width={14}
              height={14}
              quality={100}
            />
            <p className="ml-2 text-base text-regal-light-gray">
              Posted on {hostname} / 2 months ago
            </p>
          </div>
          <h4 className="mb-3 font-semibold text-lg lg:text-2xl">{history.title}</h4>
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-6">
          <div className="h-full w-3 flex items-center justify-center">
            <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
          </div>
          <div
            className={`w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow`}
          ></div>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment key={history.id}>
      {/* right */}
      <div className="flex md:contents">
        <div className="col-start-5 col-end-6 mr-6 md:mx-auto relative">
          <div className="h-full w-3 flex items-center justify-center">
            <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
          </div>
          <div
            className={`w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow`}
          ></div>
        </div>
        <div className="col-start-6 col-end-10 rounded-xl my-4 mr-auto shadow-md">
          <div className="mb-3 flex items-center">
            <Image
              alt="icon"
              src={hostname === 'zenn.dev' ? '/zenn-favicon.png' : '/qiita-favicon.png'}
              width={14}
              height={14}
              quality={100}
            />
            <p className="ml-2 text-base text-regal-light-gray">
              Posted on {hostname} / 2 months ago
            </p>
          </div>
          <h4 className="mb-3 font-semibold text-lg lg:text-2xl">{history.title}</h4>
        </div>
      </div>
    </React.Fragment>
  )
}
