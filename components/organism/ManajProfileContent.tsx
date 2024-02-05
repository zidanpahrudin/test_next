import React from 'react'
import { ProfileCard } from '../molecul'
import { mm1, mm2, mm3 } from '@/assets';

const ManajProfileContent = () => {
  return (
    <div className='w-fit h-full grid grid-rows-1 items-center gap-8 px-8
      md:grid-cols-3 md:items-start
    '>
        <ProfileCard
          src={mm1.src}
          quotes='Innovative, special and generate best of construction quality.'
        />
        <ProfileCard
          src={mm3.src}
          quotes='Provide best and reliable service, perform strong commitment and deliver worldwide customer satisfaction.'
        />
        <ProfileCard
          src={mm2.src}
          quotes='Innovative, special and generate best of construction quality.'
        />
    </div>
  )
}

export default ManajProfileContent