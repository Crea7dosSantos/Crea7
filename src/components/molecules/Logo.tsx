import React from 'react'
import { LogoImage } from '../atoms/LogoImage'
import { LogoTitle } from '../atoms/LogoTitle'

export const Logo: React.FC = () => {
  return (
    <div className="flex space-x-3 font-medium">
      <LogoImage />
      <div className="mt-1">
        <LogoTitle />
      </div>
    </div>
  )
}
