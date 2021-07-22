import React from 'react'
import Link from 'next/link'
import { Tag } from '../../types/tag'

export interface TagItemProps {
  tag: Tag
  backgroundColor: 'black' | 'gray'
  fullRounded: boolean
}

export const TagItem: React.VFC<TagItemProps> = ({ tag, backgroundColor, fullRounded }) => {
  return (
    <React.Fragment key={tag.id}>
      <Link href="">
        <a
          className={`inline-block ${
            backgroundColor === 'gray' ? 'bg-regal-dark-gray' : 'bg-black'
          } ${
            fullRounded ? 'rounded-full' : 'rounded'
          } py-1 px-2 mr-2 mt-1.5 text-xs lowercase text-white`}
          href="#"
        >
          {tag.name}
        </a>
      </Link>
    </React.Fragment>
  )
}
