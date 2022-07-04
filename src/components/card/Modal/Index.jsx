import React from "react";
import "./Styles.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ products, close }) => {
    const modalVariants = {
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
        },
        closed: { opacity: 0 },
    };

    const imageVariants = {
        open: { opacity: 1, y: "0vh" },
        closed: { opacity: 0, y: "-10vh" },
    };

    const modalRowVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "10%" },
    };

    return (
        <motion.div
            className="containerModal"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
        >
            <motion.button
                className="modal__close-wrapper"
                whileHover={{ scale: 1.2 }}
                onClick={close}
            >
                <IoCloseCircleOutline className="modal__close-icon" />
            </motion.button>
            <motion.div className="modal">
                <motion.div className="containerModalImagen">
                    <motion.img
                        className="modalImage"
                        alt={products.title}
                        src={products.image}
                        variants={imageVariants}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "30%",
                        }}
                    ></motion.img>
                    <span className="modal__price">
                        Price $ {products.price}
                    </span>
                </motion.div>
                <motion.div
                    className="modalDescription"
                    variants={modalRowVariants}
                >
                    <p className="modalTitle">{products.title}</p>
                    <p className="modal__description">{products.description}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;
