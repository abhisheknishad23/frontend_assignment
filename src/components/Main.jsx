import React, { useState } from 'react'

const Main =({sortField, setSortField, sortOrder, setSortOrder, itemsToShow, setItemsToShow})=> {

  return (
    <div className='w-full'>
      <div className='bg-blue-400 flex flex-col md:flex-row items-center justify-between mt-1 p-8'>
        <div className='text-white p-8 mt-8 max-w-md space-y-2'>
          <h2 className='text-2xl font-bold'>Adidas Men Running</h2>
          <h3 className='text-xl font-semibold'>Sneakers</h3>
          <p className='text-sm opacity-90'>
            Performance and design. Taken right to the edge.
          </p>
          <button className='mt-3 text-xs font-semibold underline'>
            SHOP NOW
          </button>
        </div>
        <div className='mt-6 mf:mt-0'>
          <img src="/img/shoes.png" alt="sneakers" className='w-84 mf:w-80 drop-shadow-lg' />
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between p-3  mb-4 mt-4 px-4 rounded-md bg-gray-100 text-gray-700'>
        <div className='text-sm font-medium'>13 Items</div>

        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-2'>
            <span className='text-sm'>Sort By</span>
            <select value={sortField} onChange={(e) => setSortField(e.target.value)} className=' rounded px-2 py-1 text-sm'>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="poplarity">Popularity</option>
            </select>
             <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="px-2 py-1 text-sm border rounded"
            >
              {sortOrder === "asc" ? "↑" : "↓"}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <select value={itemsToShow} onChange={(e)=> setItemsToShow(Number(e.target.value))} className=" rounded px-2 py-1 text-sm">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
          <div className="flex items-center gap-3  md:mt-0">
          <button className="px-4  rounded hover:bg-gray-100">
           <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdyaXAtaWNvbiBsdWNpZGUtZ3JpcCI+PGNpcmNsZSBjeD0iMTIiIGN5PSI1IiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSI1IiByPSIxIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjUiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTkiIHI9IjEiLz48Y2lyY2xlIGN4PSIxOSIgY3k9IjE5IiByPSIxIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjE5IiByPSIxIi8+PC9zdmc+' />
          </button>
          <button className="px-4  rounded hover:bg-gray-100">
           <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRleHQtYWxpZ24tanVzdGlmeS1pY29uIGx1Y2lkZS10ZXh0LWFsaWduLWp1c3RpZnkiPjxwYXRoIGQ9Ik0zIDVoMTgiLz48cGF0aCBkPSJNMyAxMmgxOCIvPjxwYXRoIGQ9Ik0zIDE5aDE4Ii8+PC9zdmc+' />
          </button>
        </div>
        </div>

    </div>
        
  )
}

export default Main