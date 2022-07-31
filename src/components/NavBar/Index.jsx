//Importaciones de Hocks y librerías  necesarios
import React, { useRef } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useDimensions } from "./Use-Dimensions/useDimensions";
import { Link } from "react-router-dom";

//?estilos del componente
import "./Styles.css";
//?iconos del componente
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import Cart from "../CartWidget/Index";

//?variantes para la librería framer-motion
const variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 1.7 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(20px at 30px 30px)",
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 40,
        },
    },
};

//?Renderización del componente usando las animaciones de la librería

const SliderBar = () => {
    const [show, setShow] = useCycle(false, true);

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <>
            <AnimatePresence>
                <motion.nav
                    initial={false}
                    animate={show ? "open" : "closed"}
                    variants={variants}
                    ref={containerRef}
                    custom={height}
                    className="slider-bar"
                    onClick={() => setShow((show) => !show)}
                >
                    <motion.div className="inner-nav">
                        <motion.ul>
                            <motion.li>
                                <Link to="/">
                                    <motion.p
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 1 }}
                                    >
                                        Home
                                    </motion.p>
                                </Link>
                            </motion.li>
                            <motion.li>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    href="#"
                                >
                                    About
                                </motion.a>
                            </motion.li>
                            <motion.li>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    href="#"
                                >
                                    Contact
                                </motion.a>
                            </motion.li>
                            <motion.li>
                                <Link to="/cart">
                                    <Cart />
                                </Link>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.nav>
            </AnimatePresence>
            <motion.button
                initial={{ scale: 1.5 }}
                className="toggle"
                onClick={() => setShow((show) => !show)}
                whileHover={{ scale: 1.7 }}
                whileTap={{ scale: 1.4 }}
            >
                {show ? <CgClose /> : <AiOutlineMenu />}
            </motion.button>
            <motion.div className="navCategory">
                <motion.ul className="dropdown-content__ul">
                    <motion.li className="category">
                        <Link to="/category/women's clothing">
                            <motion.p
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                href="#"
                            >
                                Women's clothing
                            </motion.p>
                        </Link>
                    </motion.li>
                    <motion.li className="category">
                        <Link to="/category/men's clothing">
                            <motion.p
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                href="#"
                            >
                                Men's clothing
                            </motion.p>
                        </Link>
                    </motion.li>
                    <motion.li className="category">
                        <Link to="/category/Jewelry">
                            <motion.p
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                href="#"
                            >
                                Jewelry
                            </motion.p>
                        </Link>
                    </motion.li>
                    <motion.li className="category">
                        <Link to="/category/electronics">
                            <motion.p
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                href="#"
                            >
                                Electronics
                            </motion.p>
                        </Link>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </>
    );
};

export default SliderBar;
