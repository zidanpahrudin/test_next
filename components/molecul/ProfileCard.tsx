import React from 'react'
import Image from 'next/image'

interface ProfileCard {
    quotes: string;
    src: React.ReactNode;
}

const ProfileCard:React.FC<ProfileCard> = ({
  quotes,
  src,
}) => {
  return (
    <div className='w-full h-full flex flex-row gap-5 bg-base p-8 rounded-2xl 
      drop-shadow-lg transition ease-in-out duration-500
      hover:drop-shadow-2xl hover:transition hover:ease-in-out hover:duration-500
      md:flex-col
      lg:w-[255px]
      '>
      <Image 
          src={`${src}`}
          width={100}
          height={0}
          alt=''
          className='rounded-lg drop-shadow-third w-auto'
      />
      <div className='w-100% flex flex-col gap-4'>
        <p className='text-text text-sm font-semibold leading-5 md:text-[16px] md:font-medium'>{quotes}</p>
        <p className='text-secondary text-sm font-semibold'>- Management</p>
      </div>
    </div>
  )
}

export default ProfileCard