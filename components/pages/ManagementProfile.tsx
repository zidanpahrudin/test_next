import React from 'react'
import { ManajProfileContent } from '../organism'

const ManagementProfile = () => {
  return (
    <div className='h-full w-full bg-primary py-24'>
        <section className='w-full h-fit flex flex-col gap-8 items-center'>
            <h1 className='text-5xl text-center text-secondary font-semibold'>Management Profile</h1>
            <ManajProfileContent />
        </section>
    </div>
  )
}

export default ManagementProfile