import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./styles.css";
import ItemDetails from "../ItemDetails/Index";

const Item = ({ products }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <motion.div className="CardWrapper">
            <motion.div
                className="CardContainer"
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div className="TopContainer">
                    <motion.div className="CircleWrapper">
                        <motion.div className="Circle " />
                    </motion.div>
                    <motion.div className="Wrapper">
                        <motion.div
                            className="Wrapper "
                            style={{
                                x,
                                y,
                                rotateX,
                                rotateY,
                            }}
                            drag
                            dragElastic={0.12}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <img
                                src={products.image}
                                style={{
                                    width: "200px",
                                    borderRadius: "20%",
                                }}
                                alt="foto del producto"
                            />
                        </motion.div>
                    </motion.div>
                    <motion.h2 className="Title">{products.title}</motion.h2>
                </motion.div>
                <motion.div className="BottomContainer">
                    <ItemDetails products={products} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Item;
