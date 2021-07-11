import React from 'react'
import { LogoImage } from '../atoms/LogoImage'
import Link from 'next/link'

export const Logo: React.FC = () => {
  return (
    <Link href="/" as={`/index`}>
      <a className="flex items-center m-auto">
        <LogoImage />
        <h1 className="text-2xl ml-2.5 font-bold text-white">C7DS</h1>
      </a>
    </Link>
  )
}
