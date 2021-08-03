import React from 'react'
import Link from 'next/link'
import { Category } from '../../types/category'

export interface CategoryItemProps {
  category: Category
  backgroundColor: 'black' | 'gray'
  fullRounded: boolean
}

export const CategoryItem: React.VFC<CategoryItemProps> = ({
  category,
  backgroundColor,
  fullRounded,
}) => {
  return (
    <React.Fragment key={category.id}>
      <Link href="/categories/[id]" as={`/categories/${category.id}`}>
        <a
          className={`inline-block ${
            backgroundColor === 'gray' ? 'bg-regal-weight-gray' : 'bg-black'
          } ${fullRounded ? 'rounded-full' : 'rounded'} py-1 px-2 mr-2 mt-1.5 text-xs text-white`}
        >
          {category.name}
        </a>
      </Link>
    </React.Fragment>
  )
}
