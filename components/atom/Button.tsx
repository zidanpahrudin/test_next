import React from 'react'

interface ButtonProps {
    label : string,
    labelStyle: string,
    icon : React.ReactNode,
    style : string,
}

const Button: React.FC<ButtonProps> = ({
  label, 
  icon, 
  style,
  labelStyle
}) => {
  return (
    <button className={`
      ${style} w-fit
      justify-start items-start gap-2.5 flex transition ease-in-out duration-300
    `}>
        <div className='
          w-fit gap-2 px-4 py-2 justify-center items-center flex
        '>
            <p className={`
              ${labelStyle}
              font-bold text-base text-text
            `}>
              {label}
            </p>
            {icon}
        </div>
    </button>
  )
}

export default Button