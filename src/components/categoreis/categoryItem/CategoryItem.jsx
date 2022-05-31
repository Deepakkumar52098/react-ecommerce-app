import React from 'react'
import { Link } from 'react-router-dom'
import './categoryItem.css'

const CategoryItem = (props) => {
  return (
    <div className="cItem-container">
      <Link to={`/products/${props.item.cat}`}>
        <img className="c-image" src={props.item.img} alt="" />
        <div className="c-info">
          <h1 className="c-title">
            {props.item.title}
          </h1>
          <button className="c-button">SHOP NOW</button>
        </div>
      </Link>
    </div>

  )
}

export default CategoryItem