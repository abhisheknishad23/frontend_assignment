import React, { useState } from 'react'

const FilterPanel =({title, items, range, colors})=> {
    const [open, setOpen] = useState(true)
  return (
    <div className="mb-6">
      <h3
        className="font-bold cursor-pointer flex justify-between"
        onClick={() => setOpen(!open)}
      >
        {title} <span>{open ? "-" : "+"}</span>
      </h3>
      {open && (
        <div className="mt-2">
          {items &&
            items.map((item, idx) => (
              <p key={idx} className="text-sm text-gray-600">{`${item.name} ${
                item.count ? `(${item.count})` : ""
              }`}</p>
            ))}
          {range && (
            <input type="range" min="10" max="100" className="w-full" />
          )}
          {colors && (
            <div className="flex gap-2 mt-2">
              {colors.map((c) => (
                <div
                  key={c}
                  className={`w-6 h-6 rounded-full border cursor-pointer`}
                  style={{ background: c }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default FilterPanel