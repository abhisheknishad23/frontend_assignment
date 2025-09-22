import React from 'react'

const Pagination=({current, total, onchange})=> {
  return (
    <div className='flex gap-2 mt-6 justify-center'>
        {Array(total).fill(0).map((_, idx)=>(
            <button key={idx} onClick={()=> onchange(idx +1)}
            className={`px-3 py-1 border rounded ${ current === idx +1 ? "bg-blue-500 text-white" : ""}`}>
                {idx + 1}
            </button>
        ))}
    </div>
  )
}

export default Pagination