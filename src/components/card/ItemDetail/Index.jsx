import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Styles.css";
import { IoCloseCircleOutline } from "react-icons/io5";

const ItemDetail = ({ product }) => {
    const navigate = useNavigate();

    const close = () => {
        navigate(`/`);
    };

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
                            borderRadius: "30%",
                        }}
                    ></motion.img>
                    <span className="modal__price">
                        Price $ {product.price}
                    </span>
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
