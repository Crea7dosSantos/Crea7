import React from 'react'
import Image from 'next/image'

export const LogoImage = () => {
  return <Image alt="Mountains" src="/mountains.jpg" width={300} height={300} quality={100} />
}
