import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

function ItemCount({ onConfirm, stock }) {
    const [count, setCount] = useState(1);

    const aumentar = () => {
        setCount(count >= stock ? count : count + 1);
    };

    const disminuir = () => {
        setCount(count <= 0 ? count : count - 1);
    };

    return (
        <>
            <div className="ItemCountContainer">
                <p className="quantityTitle">Quantity :</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="buttonCounter buttonCounterLeft"
                    onClick={disminuir}
                >
                    -
                </motion.button>
                <h3>{count}</h3>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="buttonCounter"
                    onClick={aumentar}
                >
                    +
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onConfirm(count)}
                    className="buttonAdd"
                >
                    Add to cart
                </motion.button>
            </div>
        </>
    );
}

export default ItemCount;
