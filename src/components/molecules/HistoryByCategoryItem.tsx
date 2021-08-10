import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'
import { History } from '../../types/history'
import { CategoryItem } from './CategoryItem'

export interface HistoryByCategoryItemProps {
  history: History
}

export const HistoryByCategoryItem: React.VFC<HistoryByCategoryItemProps> = ({ history }) => {
  return (
    <Link href={history.url}>
      <div className="flex items-start py-4 xl:py-6 mt-border-2 border-t border-gray-600 cursor-pointer hover:bg-gray-700">
        <img
          src={history.topImage.url}
          alt="top-image"
          className="w-20 h-20 xl:w-24 xl:h-24 object-cover rounded mr-6"
        />
        <div>
          <h3 className="font-semibold xl:font-bold text-base xl:text-xl leading-snug xl:leading-normal">
            {history.title}
          </h3>
          <time className="text-gray-400 text-xs xl:text-sm">
            <Moment format="YYYY.MM.DD">{history.createdAt}</Moment>
          </time>
          <div>
            {history.categories.map((category) => (
              <React.Fragment key={category.id}>
                <CategoryItem category={category} backgroundColor="gray" rounded="rounded-sm" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
