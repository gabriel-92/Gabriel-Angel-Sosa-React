import React, { useContext } from "react";
import "./styles.css";
import { Shop } from "../../Context/ShopContext";

const Cart = () => {
    const { cart, RemoveAll, removeItem, setCart } = useContext(Shop);

    //? quita todos los items del carrito
    const handleRemoveAll = () => {
        RemoveAll();
    };

    //? descuenta una Und. de un item del carrito hasta que sea menor a 1 luego lo quita
    const handleRemove = (product) => {
        const item = cart.find((item) => item.id === product.id);
        if (item.cantidad > 1) {
            item.cantidad -= 1;
            setCart([...cart]);
        } else {
            removeItem(product);
        }
    };

    // ?agrega una Und. de un item al carrito hasta que llegue a la cantidad maxima del stock del producto cuando se llega a la cantidad maxima no se agrega nada al carrito
    const handleAdd = (product) => {
        const item = cart.find((item) => item.id === product.id);
        if (item.cantidad < product.stock) {
            item.cantidad += 1;
            setCart([...cart]);
        }
    };

    return (
        <div className="bodyCart">
            <div className="CartContainer">
                <div className="Header">
                    <h3 className="Heading">Shopping Cart</h3>
                    <button className="Action" onClick={handleRemoveAll}>
                        Remove All
                    </button>
                </div>
                {cart.map((product) => (
                    <div className="Cart-Items" key={product.id}>
                        <div className="image-box">
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ height: "120px" }}
                            />
                        </div>
                        <div className="about">
                            <h3 className="title">{product.title}</h3>
                            <p className="Unit-Price"> Unit Price</p>{" "}
                            <h3 className="subtitle">$ {product.price}</h3>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ height: "30px" }}
                            />
                        </div>
                        <div className="counter">
                            <button onClick={() => handleRemove(product)}>
                                -
                            </button>
                            <div className="count">{product.cantidad}</div>
                            <button onClick={() => handleAdd(product)}>
                                +
                            </button>
                        </div>
                        <div className="prices">
                            <div className="amount">
                                <p className="Product__Sub-Total">
                                    Product Sub-Total :
                                </p>
                                <p>
                                    {(product.price * product.cantidad).toFixed(
                                        2
                                    )}{" "}
                                    $
                                </p>
                            </div>
                            <div className="remove">
                                <button
                                    className="remove"
                                    onClick={() => removeItem(product)}
                                >
                                    Remove Item
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* <div className="Cart-Items pad"> */}
                <hr />
                <div className="checkout">
                    <div className="total">
                        <div>
                            <div className="Subtotal">Total :</div>
                            <div className="items">{cart.length} items</div>
                        </div>
                        <div className="total-amount">
                            {cart
                                .reduce(
                                    (total, product) =>
                                        total +
                                        product.price * product.cantidad,
                                    0
                                )
                                .toFixed(2)}{" "}
                            $
                        </div>
                    </div>
                    <button className="button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

/*
 <div className="cart">
            <h2>Carrito</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <div className="cart-item">
                            <img src={product.image} alt={product.name} />
                            <div className="cart-item-info">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <p>
                                    <button
                                        onClick={() => handleRemove(product)}
                                    >
                                        -
                                    </button>
                                    <span>{product.cantidad}</span>
                                    <button onClick={() => handleAdd(product)}>
                                        +
                                    </button>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-footer">
                <p>
                    Total:{" "}
                    {cart.reduce(
                        (total, product) =>
                            total + product.price * product.cantidad,
                        0
                    )}
                </p>
                <button onClick={handleRemoveAll}>Remover todo</button>
            </div>
        </div>
        */
