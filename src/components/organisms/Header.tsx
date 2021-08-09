import React from 'react'
import { Logo } from '../molecules/Logo'

export const Header: React.VFC = () => {
  return (
    <header className="bg-regal-header-black py-3 border-b border-gray-600">
      <div className="m-auto sm:w-11/12 lg:w-9/12 xl:w-11/12 2xl:w-9/12 text-center sm:text-left">
        <Logo />
      </div>
    </header>
  )
}
