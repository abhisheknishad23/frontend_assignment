import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [selectColor, setSelectColor] = useState(null);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc")
  const [itemsToShow, setItemsToShow] = useState(12)
  

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-1'>
         <Sidebar selectColor={selectColor} setSelectColor={setSelectColor} />
        <main className='flex-1 p-4'>
          <Main sortField={sortField} setSortField={setSortField} sortOrder={sortOrder} setSortOrder={setSortOrder} itemsToShow={itemsToShow} setItemsToShow={setItemsToShow}/>
          <HomePage selectColor={selectColor} sortField={sortField} sortOrder={sortOrder} itemsToShow={itemsToShow}/>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
