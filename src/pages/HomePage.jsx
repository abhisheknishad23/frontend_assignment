import React, { useState, useMemo } from 'react'

import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'

const mockProducts = [
  {
    id: 1,
    title: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    hot: true,
    color: "red",
    rating: 4,
    image: "/img/image Product.png",
  },
  {
    id: 2,
    title: "Nike Air Max 270 React",
    price: 29.43,
    oldPrice: 534.33,
    discount: 24,
    hot: true,
    rating: 5,
    color: "yellow",
    image: "/img/image Product (1).png",
  },
   {
    id: 3,
    title: "Nike Air Max 270 React",
    price: 99.43,
    oldPrice: 534.33,
    discount: 24,
    hot: true,
    color: "blue",
    rating: 4,
    image: "/img/image Product (2).png",
  },
  {
    id: 4,
    title: "Nike Air Max 270 React",
    price: 9.43,
    oldPrice: 534.33,
    discount: 24,
    hot: true,
    color: "black",
    rating: 5,
    image: "img/Product Picture02.png",
  },
   {
    id: 5,
    title: "Nike Air Max 270 React",
    price: 899.43,
    oldPrice: 534.33,
    discount: 24,
    hot: true,
    color: "pink",
    rating: 4,
    image: "/img/Product Picture03.png",
  },
  {
    id: 6,
    title: "Nike Air Max 270 React",
    price: 199.43,
    oldPrice: 24,
    discount: 24,
    hot: true,
    color: "pink",
    rating: 5,
    image: "/img/Product Picture01.png",
  },
  
];

const HomePage =({selectColor, setSelectColor, sortField, sortOrder, itemsToShow})=> {
    const [page, setPage] = useState(1);
   
    const filteredProducts = selectColor ? mockProducts.filter((p)=> p.color === selectColor): mockProducts;

    // sort 
    const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (sortField === "name") {
      sorted.sort((a, b) =>
        sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
    } else if (sortField === "price") {
      sorted.sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    } else if (sortField === "popularity") {
      sorted.sort((a, b) =>
        sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
      );
    }
    return sorted;
  }, [filteredProducts, sortField, sortOrder]);

    // pagination
  const startIndex = (page - 1) * itemsToShow;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsToShow
  );


  return (
    <div>
     
       
         <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {paginatedProducts.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Pagination current={page}  total={5} onchange={setPage}/>
      

       
    </div>
  )
}

export default HomePage