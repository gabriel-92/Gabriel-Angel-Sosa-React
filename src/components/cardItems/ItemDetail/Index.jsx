//?Importaciones de librerías necesarias
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
//?Importaciones de componentes necesarios
import ItemCount from "../../ItemCount/index";
import { Shop } from "../../../Context/ShopContext";
//?Importaciones de estilos necesarios
import "./Styles.css";
import Overlay from "../../modals/Overlay/Index";
import { IoCloseCircleOutline } from "react-icons/io5";

const ItemDetail = ({ product, open, onClose }) => {
    const navigate = useNavigate();

    const [qtyAdded, setQtyAdded] = useState(0);
    const { addItem } = useContext(Shop);

    //handleConfirm //no funciona si se supera el stock del producto
    const handleConfirm = (qty) => {
        product.stock > 0
            ? setQtyAdded(qty)
            : Swal.fire({
                  title: "Out of stock",
                  text: "This product is out of stock",
                  icon: "error",
                  confirmButtonText: "Ok",
              });
    };

    const handleTerminate = () => {
        addItem(product, qtyAdded);
        navigate("/cart");
    };

    if (!open) return null;

    return (
        <AnimatePresence>
            {open && (
                <Overlay close={onclose}>
                    <motion.div
                        //si open es true, overflow: hidden; se aplica a la ventana principal
                        style={
                            open
                                ? {
                                      overflow: "hidden",
                                  }
                                : {}
                        }
                        className="containerModal"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <motion.div
                            className="modal"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <motion.div className="containerTitle">
                                <p className="modalTitle">{product.title}</p>
                            </motion.div>
                            <motion.div className="containerDescription ">
                                <p className="modal__description">
                                    {product.description}
                                </p>
                            </motion.div>
                            <motion.button
                                className="modal__close-wrapper"
                                onClick={onClose}
                            >
                                <IoCloseCircleOutline className="modal__close-icon" />
                            </motion.button>
                            <motion.div
                                className="containerImage "
                                style={{
                                    backgroundImage: `url(${product.image})`,
                                }}
                            ></motion.div>
                            <motion.div className="modalInfo">
                                <span className="modal__price">
                                    Price: $ {product.price}
                                </span>
                                <h3 className="titleStock">
                                    Stock :
                                    <span className="stock">
                                        {product.stock}
                                    </span>
                                </h3>

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
                        </motion.div>
                    </motion.div>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default ItemDetail;
