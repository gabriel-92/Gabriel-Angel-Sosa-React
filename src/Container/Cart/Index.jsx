import React, { useContext, useState } from "react";
import "./styles.css";
import { Shop } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Checkout from "../../components/modals/Checkout/Index";

const Cart = () => {
    const { cart, RemoveAll, removeItem, setCart } = useContext(Shop);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    //? quita todos los items del carrito
    const handleRemoveAll = () => {
        Swal.fire({
            title: "are you sure",
            text: "you want to remove all items?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                RemoveAll();
                Swal.fire("All items have been removed!", "success");
            }
        });
    };
    //?total de los items del carrito con el precio de cada item multiplicado por la cantidad de items que tiene el carrito

    const total = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const questionDelete = (product) => {
        Swal.fire({
            title: "¿You are about to remove the product from the shopping list?",
            text: "¡Are you sure!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "yes, i want to delete it!",
            cancelButtonText: "No, Cancel!",
        }).then((result) => {
            if (result.value) {
                removeItem(product);
                Swal.fire("The product has been removed!", "success");
            }
        });
    };

    //? descuenta una Und. de un item del carrito hasta que sea menor a 1 luego lo quita
    const handleRemove = (product) => {
        const item = cart.find((item) => item.id === product.id);
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCart([...cart]);
        } else {
            //?preguntar si quiere eliminar el producto con sweetalert2 y si lo acepta se elimina
            questionDelete(product);
        }
    };

    // ?agrega una Und. de un item al carrito hasta que llegue a la cantidad maxima del stock del producto cuando se llega a la cantidad maxima no se agrega nada al carrito
    const handleAdd = (product) => {
        const item = cart.find((item) => item.id === product.id);
        if (item.quantity < product.stock) {
            item.quantity += 1;
            setCart([...cart]);
        }
    };

    //?De no tener items en el carrito se muestra un mensaje
    if (cart.length === 0) {
        //? 10 segundo después de que se cargue la pagina te redirecciona a home
        setTimeout(() => {
            navigate(`/`);
        }, 50000); //
        return (
            <>
                <div className="notItemsContainer">
                    <div className="titleNotItemsContainer">
                        <h3 className="titleNotItems">Shopping Cart</h3>
                    </div>
                    <h1 className="notItems">
                        There are no items in the shopping cart, go back to home
                        and select an item to buy. Thank you very much.
                    </h1>
                    <br />
                    <span className="redirected">
                        You will be redirected in 10 seconds.
                    </span>
                </div>
            </>
        );
    }

    return (
        <>
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
                                    alt={product.title}
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
                                    style={{
                                        height: "30px",
                                    }}
                                />
                            </div>
                            <div className="counter">
                                <button onClick={() => handleRemove(product)}>
                                    -
                                </button>
                                <div className="count">{product.quantity}</div>
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
                                        {(
                                            product.price * product.quantity
                                        ).toFixed(2)}{" "}
                                        $
                                    </p>
                                </div>
                                <div className="remove">
                                    <button
                                        className="remove"
                                        onClick={() => questionDelete(product)}
                                    >
                                        Remove Item
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Total :</div>
                                <div className="items">{cart.length} items</div>
                            </div>
                            <div className="total-amount">
                                {total.toFixed(2)} $
                            </div>
                        </div>
                        <button
                            className="button"
                            onClick={() => setOpenModal(true)}
                        >
                            Checkout
                        </button>
                        <Checkout
                            open={openModal}
                            total={total}
                            cart={cart}
                            RemoveAll={RemoveAll}
                            onClose={() => setOpenModal(false)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
