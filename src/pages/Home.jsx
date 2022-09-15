import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import SearchAndSort from '../components/SearchAndSort/SearchAndSort'
import ItemsList from '../components/ItemList/ItemList'

const Home = () => {
  
  return (
    <div>
        <Navbar />
        <Carousel />
        <SearchAndSort />
        <ItemsList />
    </div>
  )
}

export default Home