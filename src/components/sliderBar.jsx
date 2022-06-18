import React, { useState } from "react";
import motion from "framer-motion";
import "./components/nav.css";
import MenuIcon from "@mui/icons-material/Menu";

const variants = {
    open: {
        opacity: 1,
        x: 0,
    },

    closed: {
        opacity: 0,
        x: "-100%",
    },
};

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
                {show ? <closeIcon /> : <MenuIcon />}
                <MenuIcon />
            </motion.button>
        </>
    );
};

export default SliderBar;
