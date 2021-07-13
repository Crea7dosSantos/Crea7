import React from 'react'
import Link from 'next/link'
import { Tag } from '../../types/tag'

export interface TagItemProps {
  tag: Tag
}

export const TagItem: React.VFC<TagItemProps> = ({ tag }) => {
  return (
    <React.Fragment key={tag.id}>
      <Link href="">
        <a
          className="inline-block bg-regal-dark-gray py-1 px-2 mr-2 mt-1.5 rounded-full text-xs lowercase text-white"
          href="#"
        >
          {tag.name}
        </a>
      </Link>
    </React.Fragment>
  )
}
