import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shop } from "../../../Context/ShopContext";

import { motion } from "framer-motion";
import "./styles.css";

const Item = ({ products }) => {
    const navigate = useNavigate();
    products.stock = 10;
    const [qtyAdded] = useState(1);

    const { addItem } = useContext(Shop);

    //?navega a la pagina de detalles del producto
    const handleDetail = () => {
        navigate(`/detail/${products.id}`);
    };

    //?agrega un item al carrito cuando se hace click en el  "addToCart"
    const handleAddToCart = () => {
        addItem(products, qtyAdded);
        //! le comente el navigate para que no se vaya a la pagina de carrito para poder seguir comprando, no llego con el tiempo pero quisiera hacer un modal para que avise que se agrego el item al shopping cart o alguna animación para que quede claro la adhesión al cart
        //! navigate(`/cart/`);
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
                    {/* // ? navega a la categoría del producto */}
                    <Link to={`/category/${products.category}`}>
                        <motion.span className="category">
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
                            width: "250px",
                            height: "200px",
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
                /* //?para poder separar el evento "onClick" de la función "handleDetail" */
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
