import { NextPage } from 'next'

const TimelinePage: NextPage = () => {
  return (
    <section>
      <div className="text-white py-8 bg-regal-dark-black">
        <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 lg:my-24">
          <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-8 px-8">
            <p className="ml-2 text-regal-light-gray uppercase tracking-loose">Working Process</p>
            <p className="text-3xl lg:text-4xl leading-normal lg:leading-relaxed mb-2">
              Crea7 timeline
            </p>
            <p className="text-sm lg:text-base text-regal-light-gray mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the
              exact process of the fest.
            </p>
            <a
              href="#"
              className={`bg-transparent mr-auto hover:bg-regal-dark-gray text-regal-light-gray hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent`}
            >
              Explore Now
            </a>
          </div>
          {/* timeline */}
          <div className="ml-0 lg:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-3 h-full">
                <div className="container">
                  <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 ">
                    {/* left */}
                    <div className="flex flex-row-reverse md:contents">
                      <div className=" col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md">
                        <p className="mb-3 text-base text-regal-light-gray">
                          Posted on zenn.dev / 2 months ago
                        </p>
                        <h4 className="mb-3 font-semibold text-lg lg:text-2xl">
                          stale-while-revalidate対応のCDNでISRと同じような挙動を実現する
                        </h4>
                      </div>
                      <div className="col-start-5 col-end-6 md:mx-auto relative mr-6">
                        <div className="h-full w-3 flex items-center justify-center">
                          <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
                        </div>
                        <div
                          className={`w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow`}
                        ></div>
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex md:contents">
                      <div className="col-start-5 col-end-6 mr-6 md:mx-auto relative">
                        <div className="h-full w-3 flex items-center justify-center">
                          <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
                        </div>
                        <div
                          className={`w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow`}
                        ></div>
                      </div>
                      <div className="col-start-6 col-end-10 rounded-xl my-4 mr-auto shadow-md">
                        <p className="mb-3 text-base text-regal-light-gray">
                          Posted on zenn.dev / 2 months ago
                        </p>
                        <h4 className="mb-3 font-semibold text-lg lg:text-2xl">
                          stale-while-revalidate対応のCDNでISRと同じような挙動を実現する
                        </h4>
                      </div>
                    </div>
                    {/* left */}
                    <div className="flex flex-row-reverse md:contents">
                      <div className="col-start-1 col-end-5 rounded-xl my-4 ml-auto shadow-md">
                        <p className="mb-3 text-base text-regal-light-gray">
                          Posted on zenn.dev / 2 months ago
                        </p>
                        <h4 className="mb-3 font-semibold text-lg lg:text-2xl">
                          stale-while-revalidate対応のCDNでISRと同じような挙動を実現する
                        </h4>
                      </div>
                      <div className="col-start-5 col-end-6 md:mx-auto relative mr-6">
                        <div className="h-full w-3 flex items-center justify-center">
                          <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
                        </div>
                        <div
                          className={`w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow`}
                        ></div>
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex md:contents">
                      <div className="col-start-5 col-end-6 mr-6 md:mx-auto relative">
                        <div className="h-full w-3 flex items-center justify-center">
                          <div className="h-full w-1 bg-regal-light-black pointer-events-none"></div>
                        </div>
                        <div
                          className={`w-3 h-3 absolute top-1/2 -mt-3 rounded-full bg-regal-dark-black border-solid border-2 border-regal-dark-gray shadow`}
                        ></div>
                      </div>
                      <div className="col-start-6 col-end-10 rounded-xl my-4 mr-auto shadow-md">
                        <p className="mb-3 text-base text-regal-light-gray">
                          Posted on zenn.dev / 2 months ago
                        </p>
                        <h4 className="mb-3 font-semibold text-lg lg:text-2xl">
                          stale-while-revalidate対応のCDNでISRと同じような挙動を実現する
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* finish */}
        </div>
      </div>
    </section>
  )
}

export default TimelinePage
