import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from './productItem/ProductItem'
import './products.css'

const Products = ({ category, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:4000/api/product/allProducts?category=${category}`
            : "http://localhost:4000/api/product/allProducts")
        setProducts(res.data)
      } catch (e) {
        console.log(e)
      }
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
    // console.log(filteredProducts)
  }, [sort])

  return (
    <div className='p-container'>
      {
        filteredProducts.map(product => (
          <ProductItem product={product} key={product.id} />
        ))
      }
    </div>
  )
}

export default Products