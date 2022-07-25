import React from "react";
import "./Styles.css";

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout-form">
                <div className="checkout-form-title">
                    <h3>Checkout</h3>

                    <div className="checkout-form-title-subtitle">
                        <p>
                            <span>
                                <i className="fas fa-user"></i>
                            </span>
                            <span>
                                <i className="fas fa-phone"></i>
                            </span>
                            <span>
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                        <p>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="checkout-form-content">
                    <div className="checkout-form-content-title">
                        <h3>Shipping Address</h3>
                    </div>
                    <div className="checkout-form-content-content">
                        <div className="checkout-form-content-content-form">
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" />
                            </div>

                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" id="zip" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-form-content">
                    <div className="checkout-form-content-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="checkout-form-content-content">
                        <div className="checkout-form-content-content-form">
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" id="cardNumber" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="expDate">Expiration Date</label>
                                <input type="text" id="expDate" />
                            </div>
                            <div className="checkout-form-content-content-form-input">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
