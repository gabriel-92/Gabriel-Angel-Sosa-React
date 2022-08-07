//?Importaciones de librerías necesarias
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
//?Importaciones de componentes necesarios
import { Shop } from "../../../Context/ShopContext";
import ItemDetail from "../../modals/ItemDetail/Index";
//?Importaciones de estilos necesarios
import "./styles.css";

const Item = ({ products }) => {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    const [qtyAdded] = useState(1);

    const { addItem } = useContext(Shop);

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
                    setOpenModal(true);
                }
            });
        }
    };
    return (
        <motion.div
            className="CardContainer  "
            onClick={(e) => e.stopPropagation()}
        >
            <motion.div className="Card">
                <motion.div className="CardCategory">
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
                    }}
                >
                    {/* //? solo se muestra si el stock es 0 */}
                    {products.stock === 0 && (
                        <motion.div className="OutOfStock">
                            <motion.h5>Sold out</motion.h5>
                        </motion.div>
                    )}
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
                    onClick={() => setOpenModal(true)}
                >
                    Detail
                </motion.button>
                <ItemDetail
                    open={openModal ? true : false}
                    onClose={() => setOpenModal(false)}
                    product={products}
                />
            </motion.div>
        </motion.div>
    );
};

export default Item;
