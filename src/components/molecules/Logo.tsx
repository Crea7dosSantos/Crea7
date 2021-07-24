import React from 'react'
import Link from 'next/link'

export const Logo: React.VFC = () => {
  return (
    <Link href="/" as={`/index`}>
      <a className="items-center m-auto">
        <h1 className="text-center sm:text-left text-2xl ml-2.5 font-medium text-white">Crea7</h1>
      </a>
    </Link>
  )
}
