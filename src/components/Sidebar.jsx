import Reac, {useState} from 'react'
import FilterPanel from './FilterPanel';
import ProductCard from './ProductCard';



const Sidebar =({selectColor, setSelectColor})=> {
    const [open, setOpen] = useState(true);
      const [priceRange, setPriceRange] = useState(25.99);
      
      const categories = [
    {name: "Nike", count:2},
    {name: "Airmax", count:48},
    {name: "Nike", count:14},
    {name: "Adidas", count:15},
    {name: "Vans", count:23},
    {name: "All Stars", count: 1},
    {name: "Adidas", count:95}
]
const brands = [
    { name: 'Nike', count: 99 },
    { name: 'Nike', count: 99 },
    { name: 'Adidas', count: 99 },
    { name: 'Siemens', count: 99 },
  ];

  return (
    <>
    
    <div className="hidden lg:block w-64 bg-white p-3 mt-2 ">
      <div className='bg-gray-100 p-4'>
        <h2 className="text-sm font-bold text-gray-800 mb-4">Hot Deals</h2>
      <ul className="space-y-2 mb-6 text-gray-600">
        {categories.map((category, index) => (
          <li key={index} className="flex pt-6 justify-between items-center hover:text-blue-600 transition-colors">
            <a href="#" className="text-sm">{category.name}</a>
            <span className="text-sm">{category.count}</span>
          </li>
        ))}
      </ul>
      </div>

        <div className='bg-gray-100 mt-4 p-4'>
          <h2 className="text-sm font-bold text-gray-800 mb-4">PRICES</h2>
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Ranger:</span>
          <span>$13.99 - ${priceRange.toFixed(2)}</span>
        </div>
        <input
          type="range"
          min="13.99"
          max="25.99"
          step="0.01"
          value={priceRange}
          onChange={(e) => setPriceRange(parseFloat(e.target.value))}
          className="w-full h-1 bg-blue-600 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      </div>
    

      <div className="p-4 bg-gray-100 mt-4 font-bold text-gray-800 mb-4">COLOR
      <div className="flex bg-gray-100 flex-wrap gap-4 mt-6">
        {['blue', 'red', 'black', 'yellow', 'pink', 'gray'].map((color) => (
          <div
            key={color}
            className={` w-4 h-4 rounded-full cursor-pointer border-2 transition-transform transform hover:scale-110 ${
              selectColor === color ? "border black" : "border-gray-300"
            }`}
            style={{ backgroundColor: color, borderColor: color === 'black' ? '#eee' : 'transparent' }}
            onClick={()=>
              setSelectColor(selectColor === color ? null : color)
            }
          ></div>
        ))}
      </div>
      </div>

      <div className='bg-gray-100 p-4'>
      <h2 className=" font-bold text-gray-800 mb-4">BRAND</h2>
      <ul className="space-y-2 text-gray-600">
        {brands.map((brand, index) => (
          <li key={index} className="flex pt-6 mt-6 justify-between items-center hover:text-blue-600 transition-colors">
            <a href="#" className="text-sm">{brand.name}</a>
            <span className="text-sm ">{brand.count}</span>
          </li>
        ))}
      </ul>
      </div>
      <div className="bg-gray-100 p-4 text-center font-semibold mt-4 cursor-pointer">
        MORE
      </div>
    </div>
    </>
  )
}

export default Sidebar