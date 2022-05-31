import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdSearch, MdShoppingCart } from 'react-icons/md'
import './productItem.css'


const ProductItem = ({ product }) => {
  // useEffect(()=>{
  //   console.log
  // })
  return (
    <div className='pi-container'>
      <div className="pi-circle"></div>
      <img className='pi-image' src={product.image} alt="" />
      <div className="pi-info">
        <div className="pi-icon">
          <MdShoppingCart className="pi-kart-icon" size="1.3em" />
        </div>
        <div className="pi-icon">
          <MdSearch className="pi-search-icon" size="1.3em" />
        </div>
        <div className="pi-icon">
          <IoMdHeartEmpty className='pi-heart-icon' size="1.3em" />
        </div>
      </div>
    </div>
  )
}

export default ProductItem