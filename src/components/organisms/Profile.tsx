import React from 'react'
import { ZennIcon } from '../atoms/ZennIcon'
import { TwitterIcon } from '../atoms/TwitterIcon'
import { GithubIcon } from '../atoms/GithubIcon'
import { QiitaIcon } from '../atoms/QiitaIcon'
import { EMailIcon } from '../atoms/EMailIcon'
import { MediumIcon } from '../atoms/MediumIcon'

export const Profile: React.VFC = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-3xl p-4 mx-5 sm:mx-0">
      <div className="sm:flex xl:block">
        <div className="relative h-32 w-32 mb-3 sm:mb-0 xl:mb-3">
          <img
            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
            alt="aji"
            className="w-32 h-32 object-cover rounded-2xl"
          />
        </div>
        <div className="flex-auto sm:ml-5 xl:ml-0 justify-evenly">
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
            <a
              href="https://github.com/Crea7dosSantos"
              className="flex-1 inline-flex items-center hover:text-blue-100"
            >
              <GithubIcon width={16} height={16} />
              <p className="ml-2">Github</p>
            </a>
            <a
              href="https://qiita.com/Crea7"
              className="flex-1 inline-flex items-center hover:text-blue-100"
            >
              <QiitaIcon width={16} height={16} />
              <p className="ml-2">Qiita</p>
            </a>
            <a
              href="https://medium.com/@crea7"
              className="flex-shrink inline-flex items-center hover:text-blue-100"
            >
              <MediumIcon width={16} height={16} />
              <p className="ml-2">Medium</p>
            </a>
          </div>
          <div className="flex pt-1 text-sm text-gray-400">
            <a
              href="https://twitter.com/crea7_3tos"
              className="flex-1 inline-flex items-center hover:text-blue-100"
            >
              <TwitterIcon width={16} height={16} />
              <p className="ml-2">Twitter</p>
            </a>
            <a
              href="https://zenn.dev/crea7"
              className="flex-1 inline-flex items-center hover:text-blue-100"
            >
              <ZennIcon width={16} height={16} />
              <p className="ml-2">Zenn</p>
            </a>
            <a
              href="mailto:cr26yusaku0720@icloud.com"
              className="flex-shrinkG inline-flex items-center hover:text-blue-100"
            >
              <EMailIcon width={16} height={16} />
              <p className="ml-2">E-mail</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
