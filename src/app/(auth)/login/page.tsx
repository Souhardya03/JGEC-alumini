import Auth from '@/components/Auth/Auth'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <>
      <section className='w-full h-auto'>
        {/* Membership Banner */}
        <div className="lg:mt-[8em] w-full mt-[6em] h-[30vh] sm:h-[40vh] lg:h-[60vh] overflow-hidden  ">
          <div className="h-full  rotate-0 w-full">
            <div className="text-white h-full z-20 w-full top-0 flex flex-col items-center justify-center gap-4  absolute px-4">
              <div className="lg:text-5xl text-3xl text-blue-400 font-medium">
                Membership <span className="text-white">Form</span>
              </div>
              <div className="md:text-lg lg:w-1/2 text-center">
                Register here to join our alumni association.
              </div>
            </div>
            <Image
              loading="lazy"
              layout="fill"
              objectFit="cover"
              src="/assets/membership.jpg"
              alt="membership"
              className=" brightness-[30%]"
            />
          </div>
        </div>
        <Auth />
      </section>
    </>
  )
}

export default Page