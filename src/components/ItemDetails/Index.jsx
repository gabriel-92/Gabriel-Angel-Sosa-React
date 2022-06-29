import { motion } from "framer-motion";
import React from "react";

const ItemDetails = ({ products }) => {
    return (
        <motion.div className="">
            <motion.div className="DetailsContainer">
                <motion.span className="SmallText">
                    {products.category}
                </motion.span>
                <motion.div className="SpacedHorizontalContainer ">
                    <motion.span
                        className="MediumTex"
                        style={{ display: "hidden", marginRight: "10px" }}
                    >
                        {products.description}
                    </motion.span>
                    <motion.span className="MediumTex"></motion.span>
                </motion.div>
                <motion.div className="SpacedHorizontalContainer ">
                    <motion.span className="MediumTex">
                        {products.price}
                    </motion.span>
                    <motion.button className="BuyButton">BUY</motion.button>
                </motion.div>
                <motion.img
                    src={products.image}
                    //tamaño de la imagen 50 px
                    style={{
                        width: "100px",
                        borderRadius: "10%",
                    }}
                    alt="foto del producto"
                />
            </motion.div>
        </motion.div>
    );
};

export default ItemDetails;
