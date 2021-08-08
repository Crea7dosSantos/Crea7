import React from 'react'
import Link from 'next/link'

export const Logo: React.VFC = () => {
  return (
    <Link href="/" as={`/index`}>
      <a className="text-2xl font-medium text-white hover:text-blue-600">Crea7</a>
    </Link>
  )
}
