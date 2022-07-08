import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { motion } from "framer-motion";
import "./styles.css";

const Item = ({ products }) => {
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/detail/${products.id}`);
    };

    const handleAddToCart = () => {
        navigate(`/cart/`);
    };
    return (
        <motion.div
            className="CardContainer  "
            whileHover={{
                scale: 1.1,
                cursor: "pointer",
            }}
            onClick={handleDetail}
        >
            <motion.div className="Card">
                <motion.div
                    className="CardCategory"
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.h5 className="categoryName">Category :</motion.h5>
                    {/* navegua a la categoría del producto */}
                    <Link to={`/category/${products.category}`}>
                        <motion.span
                            whileHover={{ color: "blue" }}
                            className="category"
                        >
                            {products.category}
                        </motion.span>
                    </Link>
                </motion.div>
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
            <motion.div
                className="BottomContainer"
                /*para poder separar el evento "onClick" de la función "handleDetail" */
                onClick={(e) => e.stopPropagation()}
            >
                <motion.button
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleAddToCart}
                >
                    Add to cart
                </motion.button>
                <motion.button
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDetail}
                >
                    Detail
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Item;
