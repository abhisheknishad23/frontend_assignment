import React from 'react'

const Rating=({value})=> {
  return (
    <div className='flex items-center mt-2 gap-2'>
        {Array(5).fill(0).map((_, idx)=> (
            <span key={idx} className={`${ idx <value ? "text-yellow-400" : "text-gray-300"} text-lg`}>★</span>
        ))}
        <span className='ml-2 text-sm text-gray-600'>({value})</span>
    </div>
  )
}

export default Rating