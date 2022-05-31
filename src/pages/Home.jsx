import React from 'react'
import Categories from '../components/categoreis/Categories'
import Products from '../components/products/Products'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home