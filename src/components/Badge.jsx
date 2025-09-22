import React from 'react'

const Badge=({text})=> {
  return (
    <span className='bg-red-500 text-white text-xs px-2 py-1 absolute'>
        {text}
    </span>
  )
}

export default Badge