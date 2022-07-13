import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Shop } from "../../Context/ShopContext";
import "./Styles.css";

const Cart = () => {
    const { cart } = useContext(Shop);

    console.log(cart.length);
    return (
        <motion.button
            className="Cart"
            initial={{ scale: 1.5 }}
            whileHover={{ scale: 1.7 }}
            whileTap={{ scale: 1.6 }}
        >
            <motion.span className="TextButtonCart"> Shopping Cart</motion.span>
            <AiOutlineShoppingCart />
            <motion.div className="QuantityContainer ">
                <motion.span className="QuantityCart">
                    {cart.length}
                </motion.span>
            </motion.div>
        </motion.button>
    );
};

export default Cart;
