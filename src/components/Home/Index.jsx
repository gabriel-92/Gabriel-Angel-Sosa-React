import React from "react";
import { motion } from "framer-motion";
const Home = () => {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="Title"
            >
                Desafió Nº6 - React - Gabriel Sosa
            </motion.h1>
        </div>
    );
};

export default Home;
