import React from 'react'
import { TwitterIcon } from '../atoms/TwitterIcon'

export const TopProfile: React.VFC = () => {
  return (
    <div className="flex flex-col w-full sticky xl:top-36 xl:w-1/3 mt-2 xl:mt-8 px-8">
      <p className="ml-2 text-regal-light-gray uppercase tracking-loose">Timeline</p>
      <h1 className="text-3xl xl:text-4xl leading-normal xl:leading-relaxed mb-2">
        Crea7 Timeline
      </h1>
      <p className="text-sm xl:text-base text-regal-light-gray mb-4">
        web/iOS application developer. This is my history. <br />
        Follow{' '}
        <a
          href="https://twitter.com/crea7_3tos"
          className="pb-0.5 border-b border-regal-weight-gray hover:text-blue-100"
        >
          @crea7_3tos <TwitterIcon width={18} height={18} />
        </a>{' '}
        for daily updates.
      </p>
    </div>
  )
}
