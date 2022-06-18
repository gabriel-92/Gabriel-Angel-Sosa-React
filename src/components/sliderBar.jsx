//componentes necesarios
import React, { useState } from "react";
import { motion } from "framer-motion";
//estilos del componente
import "./nav.css";

//animación de circulo en expansion utilizando framer-motion
const variants = {
    open: (height = 1000) => ({
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
                animate={show ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <motion.div className="inner-nav">
                    <motion.ul>
                        <motion.li>
                            <motion.a href="#">Home</motion.a>
                        </motion.li>
                        <motion.li>
                            <motion.a href="#">About</motion.a>
                        </motion.li>
                        <motion.li>
                            <motion.a href="#">Contact</motion.a>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.nav>
            <motion.button
                className="toggle"
                onClick={() => setShow((show) => !show)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.img
                    animate={show ? "open" : "closed"}
                    src="https://img.icons8.com/color/48/000000/menu.png"
                />
            </motion.button>
        </>
    );
};

export default SliderBar;
