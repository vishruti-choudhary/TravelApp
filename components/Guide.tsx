import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="italic regular-18 -mt-1 mb-3 text-blue-500">
          Count on us, we're at your service.
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-gray-900">Lead you to the simpler route.</h2>
          <p className="regular-16 text-gray-700 xl:max-w-[520px]">With the VeiledVoyager app, losing your way and wandering aimlessly are things of the past. Our app provides offline maps, ensuring navigation even in areas without internet connectivity. Gather your friends and loved ones for an adventure in the wilderness, trekking through valleys and conquering mountaintops together.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">24 min</p>
              </div>
              <p className="bold-20 mt-2"> Pachmari </p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Dhupgarah</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide