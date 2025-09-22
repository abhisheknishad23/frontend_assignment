import React from 'react'
import Badge from './Badge';
import Rating from './Rating';

const ProductCard =({product})=> {
    const {title, price, oldPrice, discount, hot, rating, image} = product;
  return (
    <div className=' h-full  shadow hover:shadow-lg transition'>
        {hot && <Badge text="HOT" />}
        <img src={image} alt={title} className='w-full h-52 object-cover mb-4 rounded'/>

        <div className='p-4 flex flex-col text-center items-center'>
        <h3 className='font-semibold'>{title}</h3>
        <Rating value={rating} />
        <div className='flex  items-center gap-2 justify-center'>

            <span className='text-blue-600 font-bold'>${price}</span>
            {oldPrice && (
                <span className='line-through text-gray-400'>${oldPrice}</span>
            )}
            {discount && <span className='text-red-500'>{discount}% off</span>}

        </div>
        </div>
        
    </div>
  )
}

export default ProductCard