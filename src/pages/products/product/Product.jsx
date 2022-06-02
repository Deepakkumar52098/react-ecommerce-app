import React, { useEffect, useState } from 'react'
import './product.css'
import { MdRemove, MdAdd } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import * as api from '../../../api/api';

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({ size: [], color: [] })
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    useEffect(() => {
        const getProduct = async () => {
            const response = await api.getProductById(id)
            setProduct(response.data)
        }
        getProduct();
    }, [id])

    const handleQunatity = (type) => {
        if (type === "dec") {
            quantity > 0 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleAddToCart = async () => {
        const cartData = {
            userId: "1",
            products: [
                {
                    productId: id,
                    quantity,
                    color,
                    size
                }
            ]
        }
        const response = await api.addToCart(cartData)
        response && alert("Product added to cart successfully!")
    }

    return (
        <div className='p-container'>
            <div className="p-wrapper">
                <div className="p-imageContainer">
                    <img src={product.image} alt="" className="p-image" />
                </div>
                <div className="p-infoContainer">
                    <h1 className="p-title">{product.title}</h1>
                    <p className="p-description">{product.description}</p>
                    <span className="p-price">Rs. {product.price}</span>
                    <div className="p-filterContainer">
                        <div className="p-filter">
                            <span className="p-filterTitle">Color</span>
                            {product.color.map(color => (
                                <div
                                    className="p-filterColor"
                                    key={color}
                                    style={{ backgroundColor: `${color}` }}
                                    onClick={() => setColor(color)}>
                                </div>
                            ))}
                        </div>
                        <div className="p-filter">
                            <span className="p-filterTitle">Size</span>
                            <select className="p-filterSize"
                                name=""
                                id=""
                                onChange={(e) => setSize(e.target.value)}>
                                {product.size.map(size => (
                                    <option
                                        name={size}
                                        key={size}
                                        value={size}
                                    >{size}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="p-addContainer">
                        <div className="p-amountContainer">
                            <MdRemove
                                className='p-icon'
                                size="1.3em"
                                onClick={() => handleQunatity("dec")} />
                            <span className="p-amount">{quantity}</span>
                            <MdAdd
                                className='p-icon'
                                size="1.3em"
                                onClick={() => handleQunatity("inc")} />
                        </div>
                        <button
                            className={!quantity >= 1 ? "p-button-disabled" : "p-button"}
                            disabled={!quantity >= 1}
                            onClick={handleAddToCart}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product