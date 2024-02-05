import React from 'react'
import { ProjectContent } from '../organism'

const ProjectExperience = () => {
  return (
    <div id='Project' className='bg-gradient-to-tl from-white via-accentSecond to-white 
        w-full h-full flex flex-col gap-12 justify-center items-center
        py-24
    '>
        <h1 className='text-4xl font-semibold
            bg-gradient-to-b from-green-500 from-60% to-accentThird p-1
            text-transparent bg-clip-text
            lg:text-5xl
        '>
            Project Experience
        </h1>
        <ProjectContent />
    </div>
  )
}

export default ProjectExperience