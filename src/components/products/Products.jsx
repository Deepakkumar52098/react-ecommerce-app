import React, { useEffect, useState } from 'react'
import * as api from '../../api/api'
import ProductItem from './productItem/ProductItem'
import './products.css'

const Products = ({ category, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = category ?
        await api.getAllProductsWithCategory(category) :
        await api.getAllProducts()
      setProducts(response.data)
    }
    getProducts();
  }, [category])

  useEffect(() => {
    category ? setFilteredProducts(
      products.filter(product => Object.entries(filters).every(([key, value]) =>
        product[key].includes(value)
      ))
    ) : setFilteredProducts(products)
  }, [products, category, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <div className='p-container'>
      {filteredProducts.map(product => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  )
}

export default Products