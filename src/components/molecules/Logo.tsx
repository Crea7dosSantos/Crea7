import React from 'react'
import { LogoImage } from '../atoms/LogoImage'

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <LogoImage />
      <h1 className="text-2xl ml-2.5 font-bold">C7DS</h1>
    </div>
  )
}
