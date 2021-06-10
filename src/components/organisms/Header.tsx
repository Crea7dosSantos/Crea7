import React from 'react'
import { Logo } from '../molecules/Logo'

export const Header: React.FC = () => {
  return (
    <header className="bg-black">
      <div className="m-auto w-8/12">
        <Logo />
      </div>
    </header>
  )
}
