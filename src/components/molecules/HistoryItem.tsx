import React from 'react'
// import Link from 'next/link'
import { History } from '../../types/history'

export interface HistoryItemProps {
  history: History
}

export const HistoryItem: React.VFC<HistoryItemProps> = ({ history }) => {
  return (
    <React.Fragment key={history.id}>
      <div className="flex flex-row-reverse md:contents">
        <div className="col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md">
          <p className="mb-3 text-base text-regal-light-gray">Posted on zenn.dev / 2 months ago</p>
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
  )
}
