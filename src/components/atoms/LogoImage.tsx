import React from 'react'
import Image from 'next/image'

export const LogoImage: React.FC = () => {
  return <Image src="/favicon.ico" alt="Picture of the author" width={200} height={200} />
}
