import React from 'react'
import Image from 'next/image'

export const Profile: React.VFC = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 shadow-lg  rounded-3xl p-4">
      <div className="sm:flex lg:block">
        <div className="relative h-32 w-32 mb-3 sm:mb-0 lg:mb-3">
          <img
            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
            alt="aji"
            className="w-32 h-32 object-cover rounded-2xl"
          />
        </div>
        <div className="flex-auto sm:ml-5 lg:ml-0 justify-evenly">
          <div className="flex items-center justify-between sm:mt-2">
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                  Crea7
                </div>
                <div className="flex-auto text-gray-400 my-1">
                  <span className="mr-3">web/iOS Developer</span>
                  <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                  <span>Whizzy Inc.</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-400">Crazy Like ODB、Play Like 勝新</p>
          <div className="pt-2 flex text-sm text-gray-400">
            <a href="" className="flex-1 inline-flex items-center hover:text-blue-100">
              <Image alt="icon" src="/github-favicon.png" width={14} height={14} quality={100} />
              <p className="ml-2">Github</p>
            </a>
            <a href="" className="flex-1 inline-flex items-center hover:text-blue-100">
              <Image alt="icon" src="/twitter-favicon.png" width={14} height={14} quality={100} />
              <p className="ml-2">Twitter</p>
            </a>
            <a href="" className="flex-1 inline-flex items-center hover:text-blue-100">
              <Image alt="icon" src="/qiita-favicon.png" width={14} height={14} quality={100} />
              <p className="ml-2">Qiita</p>
            </a>
          </div>
          <div className="flex pt-0.5 text-sm text-gray-400">
            <a href="" className="flex-1 inline-flex items-center hover:text-blue-100">
              <Image alt="icon" src="/zenn-favicon.png" width={14} height={14} quality={100} />
              <p className="ml-2">Zenn</p>
            </a>
            <a href="" className="flex-1 inline-flex items-center hover:text-blue-100">
              <Image alt="icon" src="/email-favicon.png" width={14} height={14} quality={100} />
              <p className="ml-2">E-mail</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
