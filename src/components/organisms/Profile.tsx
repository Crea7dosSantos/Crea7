import React from 'react'
import { TwitterIcon } from '../atoms/TwitterIcon'

export const Profile: React.VFC = () => {
  return (
    <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-8 px-8">
      <p className="ml-2 text-regal-light-gray uppercase tracking-loose">Life Process</p>
      <p className="text-3xl lg:text-4xl leading-normal lg:leading-relaxed mb-2">Crea7 timeline</p>
      <p className="text-sm lg:text-base text-regal-light-gray mb-4">
        I’m web application developer, ios application developer. This is my history. <br />
        Follow{' '}
        <a href="https://twitter.com/crea7_3tos" className="pb-0.5 border-b border-regal-dark-gray">
          @crea7_3tos <TwitterIcon width={18} height={18} />
        </a>{' '}
        for daily updates.
      </p>
      <a
        href="#"
        className="bg-transparent mr-auto hover:bg-regal-dark-gray text-regal-light-gray hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent"
      >
        Explore Now
      </a>
    </div>
  )
}
