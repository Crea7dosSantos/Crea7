import React from 'react'
import Link from 'next/link'
import { Category } from '../../types/category'

export interface CategoryItemProps {
  category: Category
  backgroundColor: 'black' | 'gray'
  rounded?: 'rounded-sm' | 'rounded' | 'rounded-full'
}

export const CategoryItem: React.VFC<CategoryItemProps> = ({
  category,
  backgroundColor,
  rounded = 'rounded-full',
}) => {
  const small =
    rounded === 'rounded-sm'
      ? 'category-small py-1 px-1.5'
      : rounded === 'rounded-full'
      ? 'category-small py-1 px-2'
      : rounded === 'rounded'
      ? 'text-xs py-1 px-2'
      : ''
  const medium =
    rounded === 'rounded-sm'
      ? 'text-xs py-1 px-2'
      : rounded === 'rounded-full'
      ? 'text-xs py-1 px-2'
      : rounded === 'rounded'
      ? 'text-xs py-1 px-2'
      : ''
  return (
    <React.Fragment key={category.id}>
      <Link href="/categories/[id]" as={`/categories/${category.id}`}>
        <a
          className={`inline-block ${
            backgroundColor === 'gray' ? 'bg-regal-weight-gray' : 'bg-black'
          } ${rounded} mr-2 mt-1.5 ${small} xl:${medium}`}
        >
          {category.name}
        </a>
      </Link>
    </React.Fragment>
  )
}
