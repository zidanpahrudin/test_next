'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import { IconBaseProps } from 'react-icons'

interface CardProps{
    src: React.ReactNode,
    title: string,
    desc: string,
    icon: React.ReactNode,
    // style: string
}

const Card: React.FC<CardProps> = ({
    src,
    title,
    desc,
}) => {

    const [isHovering, setIsHovered] = useState(false)
    const [isClick, setIsClick] = useState(false)

    const onMouseEnter = () => setIsHovered(true)
    const onClick = () => setIsClick(true) 
    
  return (
    <div 
        className='
            flex flex-col bg-accentFirst hover:bg-accentFirst border transition-all ease-in-out duration-500 cursor-default
            p-[20px] h-auto w-auto drop-shadow-secondary hover:drop-shadow-primary
            rounded-[16px] gap-4
            md:flex-row
            lg:flex-col
            lg:bg-base'
        onMouseEnter={onMouseEnter}
        onClick={onClick}
    >
        <div className='h-[136px] flex items-center transition-all ease-in-out duration-500'>
           <Image 
                src={`${src}`} 
                alt={title}
                width={0} height={0}
                sizes='100vw'
                style={{ width: '100%', height: '136px', transition: 'width 0.3s ease' }}
                className='rounded-[6px]'
            />
        </div>
        <article className='w-full flex flex-col gap-2'>
            <h1 className='leading-tight text-[22px] font-semibold text-text'>{title}</h1>
            <p className='leading-normal text-text text-justify'>{desc}</p>
        </article>
    </div>


  )
}

export default Card