import React from 'react'

const Button = ({title, id, containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}>
       <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
        {title}
       </span>
    </button>
  )
}

export default Button