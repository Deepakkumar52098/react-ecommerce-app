import React from "react";
import { MdOutlineRemove, MdOutlineAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import './cart.css'


const Cart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div className="k-container">
            <div className="k-wrapper">
                <h1 className="k-title">YOUR BAG</h1>
                <div className="k-top">
                    <button className="k-topButton">CONTINUE SHOPPING</button>
                    <div className="k-topTexts">
                        <span className="k-topText">Shopping Bag ({cart.quantity})</span>
                        <span className="k-topText">Your Wishlist (0)</span>
                    </div>
                    <button className="k-topButton" type="filled">CHECKOUT NOW</button>
                </div>
                <div className="k-bottom">
                    <div className="k-info">
                        {cart.products && cart.products.map(product => (
                            <>
                                <div className="k-product">
                                    <div className="k-productDetail">
                                        <img className="k-image" src={product.image} alt="" />
                                        <div className="k-details">
                                            <span className="k-productName">
                                                <b>Product:</b> {product.title}
                                            </span>
                                            <span className="k-productId">
                                                <b>ID:</b> {product._id}
                                            </span>
                                            {product.color &&
                                                <div
                                                    className="k-productColor"
                                                    style={{ backgroundColor: `${product.color}` }}>
                                                </div>
                                            }
                                            {product.size &&
                                                <div className="k-productSize">
                                                    <b>Size:</b> {product.size}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="k-priceDetail">
                                        <div className="k-productAmountContainer">
                                            <MdOutlineAdd className="k-add" size="1.3em" />
                                            <div className="k-productAmount">{product.quantity}</div>
                                            <MdOutlineRemove className="k-remove" size="1.3em" />
                                        </div>
                                        <div className="k-productPrice">INR {product.price}</div>
                                    </div>
                                </div>
                                <hr className="k-hr" />
                            </>
                        ))}
                    </div>
                    <div className="k-summary">
                        <h1 className="k-summaryTitle">ORDER SUMMARY</h1>
                        <div className="k-summaryItem">
                            <span className="k-summaryItemText">Subtotal</span>
                            <span className="k-summaryItemPrice">INR {cart.totalAmount}</span>
                        </div>
                        <div className="k-summaryItem">
                            <span className="k-summaryItemText">Estimated Shipping</span>
                            <span className="k-summaryItemPrice">INR 50</span>
                        </div>
                        <div className="k-summaryItem">
                            <span className="k-summaryItemText">Shipping Discount</span>
                            <span className="k-summaryItemPrice">$ 0</span>
                        </div>
                        <div className="k-summaryItem" type="total">
                            <span className="k-summaryItemText">Total</span>
                            <span className="k-summaryItemPrice">INR {cart.totalAmount + 50}</span>
                        </div>
                        <button className="k-button">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;