//componentes necesarios
import React, { useState } from "react";
import { motion } from "framer-motion";
//estilos del componente
import "./Styles.css";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import Cart from "../CartWidget/Index";

// event listener for document body
// so that on clicking outside the SliderBar,
// 'SliderBar' is set to false.
//animación de circulo en expansion utilizando framer-motion

const variants = {
    open: (height = 500) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

//Renderización del componente usando las animaciones de la librería

const SliderBar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <motion.nav
                hidden={!show}
                animate={show ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <motion.div className="inner-nav">
                    <motion.ul>
                        <motion.li>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                href="#"
                            >
                                Home
                            </motion.a>
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
                            <Cart />
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.nav>
            <motion.button
                initial={{ scale: 1.5 }}
                className="toggle"
                onClick={() => setShow((show) => !show)}
                whileHover={{ scale: 1.7 }}
                whileTap={{ scale: 1.4 }}
            >
                {show ? <CgClose /> : <AiOutlineMenu />}
            </motion.button>
        </>
    );
};

export default SliderBar;
