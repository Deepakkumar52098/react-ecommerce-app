import React from "react";
import { MdOutlineRemove, MdOutlineAdd } from "react-icons/md";

import './cart.css'


const Cart = () => {
    return (
        <div className="k-container">
            {/* <Navbar />
      <Announcement /> */}
            <div className="k-wrapper">
                <h1 className="k-title">YOUR BAG</h1>
                <div className="k-top">
                    <button className="k-topButton">CONTINUE SHOPPING</button>
                    <div className="k-topTexts">
                        <span className="k-topText">Shopping Bag(2)</span>
                        <span className="k-topText">Your Wishlist (0)</span>
                    </div>
                    <button className="k-topButton" type="filled">CHECKOUT NOW</button>
                </div>
                <div className="k-bottom">
                    <div className="k-info">
                        <div className="k-product">
                            <div className="k-productDetail">
                                <img className="k-image" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className="k-details">
                                    <span className="k-productName">
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span className="k-productId">
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="k-productColor" color="black"></div>
                                    <div className="k-productSize">
                                        <b>Size:</b> 37.5
                                    </div>
                                </div>
                            </div>
                            <div className="k-priceDetail">
                                <div className="k-productAmountContainer">
                                    <MdOutlineAdd className="k-add" size="1.3em" />
                                    <div className="k-productAmount">2</div>
                                    <MdOutlineRemove className="k-remove" size="1.3em" />
                                </div>
                                <div className="k-productPrice">$ 30</div>
                            </div>
                        </div>
                        <hr className="k-hr" />
                        <div className="k-product">
                            <div className="k-productDetail">
                                <img className="k-image" src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="" />
                                <div className="k-details">
                                    <span className="k-productName">
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </span>
                                    <span className="k-productId">
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="k-productColor" color="gray"></div>
                                    <span className="k-productSize">
                                        <b>Size:</b> M
                                    </span>
                                </div>
                            </div>
                            <div className="k-priceDetail">
                                <div className="k-productAmountContainer">
                                    <MdOutlineAdd className="k-add" size="1.3em" />
                                    <div className="k-productAmount">1</div>
                                    <MdOutlineRemove className="k-remove" size="1.3em" />
                                </div>
                                <div className="k-productPrice">$ 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="k-summary">
                        <h1 className="k-summaryTitle">ORDER SUMMARY</h1>
                        <div className="k-summaryItem">
                            <span className="k-summaryItemText">Subtotal</span>
                            <span className="k-summaryItemPrice">$ 80</span>
                        </div>
                        <div className="k-summaryItem">
                            <span className="k-summaryItemText">Estimated Shipping</span>
                            <span className="k-summaryItemPrice">$ 5.90</span>
                        </div>
                        <div className="k-summaryItem">
                            <span className="k-summaryItemText">Shipping Discount</span>
                            <span className="k-summaryItemPrice">$ -5.90</span>
                        </div>
                        <div className="k-summaryItem" type="total">
                            <span className="k-summaryItemText">Total</span>
                            <span className="k-summaryItemPrice">$ 80</span>
                        </div>
                        <button className="k-button">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Cart;