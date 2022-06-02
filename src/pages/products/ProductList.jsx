import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Products from '../../components/products/Products'
import './productList.css'

const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value
    })
  }
  return (
    <div>
      <h1 className='pl-title'>{category}</h1>
      <div className="pl-filterContainer">
        <div className="pl-filter">
          <span className='pl-filterText'>Filter Products:</span>
          <select name="color" className='pl-select' id="" onChange={handleFilter}>
            <option disabled >Color</option>
            <option value ="white">White</option>
            <option value ="black">Black</option>
            <option value ="red">Red</option>
            <option value ="blue">Blue</option>
            <option value ="yellow">Yellow</option>
            <option value ="green">Green</option>
          </select>
          <select name="size" className='pl-select' id="" onChange={handleFilter}>
            <option disabled >Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="pl-filter">
          <span className='pl-filterText'>Sort Products:</span>
          <select className='pl-select' name="sort" id="" onChange={e => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filter} sort={sort} />
    </div>
  )
}

export default ProductList