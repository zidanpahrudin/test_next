import React from 'react'
import { GalleryContent } from '../organism'

const Gallery = () => {
  return (
    <div id='Gallery' className='bg-gradient-to-b from-base to-primary to-50%
        w-full h-fit py-24
        flex flex-col justify-center items-center gap-12'>
            <GalleryContent />
    </div>
  )
}

export default Gallery