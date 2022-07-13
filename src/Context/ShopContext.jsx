import React, { useState, createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //?Agregar un item al carrito, acorde a la cantidad que no se pase del stock del producto
    const addItem = (producto, cantidad) => {
        const item = cart.find((item) => item.id === producto.id);
        if (item) {
            item.cantidad += cantidad;
        } else {
            setCart([...cart, { ...producto, cantidad }]);
        }
    };

    //? remueve todos los items del carrito
    const RemoveAll = () => {
        setCart([]);
    };

    //? elimina un item del carrito por id
    const removeItem = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
    };

    return (
        <Shop.Provider
            value={{
                cart,
                addItem,
                removeItem,
                RemoveAll,
                setCart,
            }}
        >
            {children}
        </Shop.Provider>
    );
};

export default ShopProvider;
