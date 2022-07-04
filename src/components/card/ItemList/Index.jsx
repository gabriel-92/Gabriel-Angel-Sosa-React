import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Item from "../Item";
import "./styles.css";
import Modal from "../Modal/Index";
import Overlay from "../Overlay/Index";

const ItemList = ({ products }) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <motion.div className="ItemList">
            <motion.div className="parent">
                {products.map((producto) => {
                    return (
                        <Item
                            products={producto}
                            key={producto.id}
                            open={openModal}
                        />
                    );
                })}
                <AnimatePresence>
                    {open && (
                        <Overlay key="Modal" close={closeModal}>
                            {products.map((producto) => {
                                return (
                                    <Modal
                                        products={producto}
                                        close={closeModal}
                                        key="Modal"
                                    />
                                );
                            })}
                        </Overlay>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default ItemList;
