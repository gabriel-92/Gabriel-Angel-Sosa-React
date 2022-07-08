import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Styles.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import ItemCount from "../../ItemCount/index";

const ItemDetail = ({ product }) => {
    product.stock = 10;

    const navigate = useNavigate();

    const [qtyAdded, setQtyAdded] = useState(0);
    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    };

    const handleTerminate = () => {
        navigate("/cart");
    };

    const close = () => {
        navigate(`/`);
    };
    console.log(qtyAdded);

    return (
        <motion.div className="containerModal">
            <motion.button className="modal__close-wrapper" onClick={close}>
                <IoCloseCircleOutline className="modal__close-icon" />
            </motion.button>
            <motion.div className="modal">
                <motion.div className="containerModalImagen">
                    <motion.img
                        className="modalImage"
                        alt={product.title}
                        src={product.image}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10%",
                        }}
                    ></motion.img>
                    <span className="modal__price">
                        Price $ {product.price}
                    </span>
                    {!qtyAdded ? (
                        <ItemCount
                            stock={product.stock}
                            onConfirm={handleConfirm}
                        />
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="buttonFinish"
                            onClick={handleTerminate}
                        >
                            Finish buying
                        </motion.button>
                    )}
                </motion.div>
                <motion.div className="modalDescription">
                    <p className="modalTitle">{product.title}</p>
                    <p className="modal__description">{product.description}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ItemDetail;
