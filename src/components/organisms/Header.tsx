import React from 'react'
import { Logo } from '../molecules/Logo'

export const Header: React.FC = () => {
  return (
    <header className="bg-black">
      <div className="m-auto w-11/12 sm:w-11/12 md:w-10/12 lg:w-9/12">
        <Logo />
      </div>
    </header>
  )
}
