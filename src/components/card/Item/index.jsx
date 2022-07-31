import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shop } from "../../../Context/ShopContext";

import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "./styles.css";

const Item = ({ products }) => {
    const navigate = useNavigate();
    const [qtyAdded] = useState(1);

    const { addItem } = useContext(Shop);

    //?navega a la pagina de detalles del producto
    const handleDetail = () => {
        navigate(`/detail/${products.id}`);
    };

    //?"handleAddToCart" agrega un item al carrito cuando se hace click en el  "addToCart" hasta que llegue al stock máximo del producto
    const handleAddToCart = () => {
        if (products.stock > 0) {
            addItem(products, qtyAdded);
            products.stock -= qtyAdded;
            Swal.fire({
                title: "Added to cart",
                text: "Item added to cart",
                icon: "success",
                showConfirmButton: false,
                width: "fit-content",
            });
        } else {
            //?si el stock es 0, se muestra un mensaje de alerta con sweetalert2 con opciones para ir a home o al detalle del producto
            Swal.fire({
                title: "¡no stock!",
                text: "The selected product does not have stock available",
                icon: "error",
                confirmButtonText: "Return to the store",
                cancelButtonText: "See details",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                confirmButtonColor: "#3085d6",
                showCloseButton: true,
                allowOutsideClick: false,
            }).then((result) => {
                if (result.value) {
                    navigate(`/`);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigate(`/detail/${products.id}`);
                }
            });
        }
    };
    return (
        <motion.div
            className="CardContainer  "
            whileHover={{
                scale: 1.05,
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
                <motion.div
                    className="imageContainer"
                    style={{
                        backgroundImage: `url(${products.image})`,
                        backgroundPosition: " center",
                        backgroundRepeat: "no-repeat",
                        width: "250px",
                        height: "250px",
                        borderRadius: "10px",
                        backgroundSize: "contain",
                    }}
                ></motion.div>
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
