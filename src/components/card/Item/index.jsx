import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Item = ({ products }) => {
    return (
        <motion.div
            className="CardContainer "
            whileHover={{
                scale: 1.1,
                cursor: "pointer",
            }}
        >
            <motion.div className="Card">
                <motion.h5 className="categoryName">Category :</motion.h5>
                <motion.span className="category">
                    {products.category}
                </motion.span>
                <motion.div className="imageContainer">
                    <img
                        className="cardImg"
                        src={products.image}
                        alt={products.title}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: "50%",
                        }}
                    />
                </motion.div>
                <motion.div className="titleContainer">
                    <motion.h3 className="Title">{products.title}</motion.h3>
                </motion.div>
                <motion.div className="priceContainer">
                    <motion.h3 className="Price">
                        Price : ${products.price}
                    </motion.h3>
                </motion.div>
            </motion.div>
            <motion.div className="BottomContainer">
                <motion.button
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Add to cart
                </motion.button>
                <motion.button
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Buy now
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Item;
