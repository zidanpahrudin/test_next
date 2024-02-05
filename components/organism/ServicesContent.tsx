import React from 'react'
import Image from 'next/image'
import { ServicesCard } from '../molecul'
import { vLeft, vRight } from '@/assets'

const ServicesContent = () => {
  return (
    <>
        <div>
            <Image
                src={vLeft}
                alt='vLeft Geometry'
                className='absolute left-0 bottom-[296px]' />
            <Image
                src={vRight}
                alt='vLeft Geometry'
                className='absolute right-0 bottom-[296px]' />
        </div>
        <div className="w-full h-[297px] bottom-0 absolute bg-accentSecond" />
        <div className='w-full h-fit flex flex-col items-center justify-center gap-y-[48px]
            px-8
        '>
            <div className='w-fit h-fit flex flex-col justify-center gap-[8px]
                md:w-3/4
            '>
                <h1 className='text-5xl font-semibold font-roboto text-[#A9E44D] text-center'>Our Services</h1>
                <p className='font-semibold text-center text-accentThird leading-normal w-auto h-fit
                    text-sm lg:text-[16px]
                '>
                    Our expertise in construction services are specialized in particular fields such as prestressing, slipforming, ground anchors, launching girder, structural repair and general construction. It makes us expert and specialist in those fields.
                </p>
            </div>
            <div className='flex flex-shrink flex-grow gap-12'>
                <ServicesCard />
            </div>
        </div>
    </>
  )
}

export default ServicesContent