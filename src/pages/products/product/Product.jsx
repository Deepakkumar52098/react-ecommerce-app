import React from 'react'
import './product.css'
import { MdRemove, MdAdd } from "react-icons/md";



const Product = () => {
    const backgroundColor = ["black", "darkblue", "gray"]
    return (
        <div className='p-container'>
            <div className="p-wrapper">
                <div className="p-imageContainer">
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" className="p-image" />
                </div>
                <div className="p-infoContainer">
                    <h1 className="p-title">Denim Jumpsuit</h1>
                    <p className="p-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </p>
                    <span className="p-price"> $ 20</span>
                    <div className="p-filterContainer">
                        <div className="p-filter">
                            <span className="p-filterTitle">Color</span>
                            {
                                backgroundColor.map(color => (
                                    <div className="p-filterColor" style={{ backgroundColor: `${color}` }}>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="p-filter">
                            <span className="p-filterTitle">Size</span>
                            <select name="" id="" className="p-filterSize">
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className="p-addContainer">
                        <div className="p-amountContainer">
                            <MdRemove className='p-icon' size="1.3em" />
                            <span className="p-amount">1</span>
                            <MdAdd className='p-icon' size="1.3em" />
                        </div>
                        <button className="p-button">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product