import React from "react";
import { motion } from "framer-motion";
import Item from "../Item";
import "./styles.css";

const ItemList = ({ products }) => {
    return (
        <motion.div className="ContainerCar">
            {products.map((producto) => {
                return <Item products={producto} key={producto.id} />;
            })}
        </motion.div>
    );
};

export default ItemList;
