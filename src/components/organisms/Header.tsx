import React from 'react'
import { Logo } from '../molecules/Logo'

export const Header: React.VFC = () => {
  return (
    <header className="bg-black">
      <div className="m-auto w-10/12 lg:w-9/12 flex md:block">
        <Logo />
      </div>
    </header>
  )
}
