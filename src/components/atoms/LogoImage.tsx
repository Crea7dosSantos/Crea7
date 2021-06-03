import React from 'react'
import Image from 'next/image'

export const LogoImage = () => {
  return <Image alt="Mountains" src="/mountains.jpg" width={50} height={50} quality={100} />
}
