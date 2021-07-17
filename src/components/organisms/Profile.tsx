import React from 'react'

export const Profile: React.VFC = () => {
  return (
    <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-8 px-8">
      <p className="ml-2 text-regal-light-gray uppercase tracking-loose">Life Process</p>
      <p className="text-3xl lg:text-4xl leading-normal lg:leading-relaxed mb-2">Crea7 timeline</p>
      <p className="text-sm lg:text-base text-regal-light-gray mb-4">
        Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact
        process of the fest.
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
