//import react from "react";
import { motion } from "framer-motion";
// import SliderBar from "./components/sliderBar";
function App() {
    return (
        <div className="App">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="App"
            >
                <motion.h1>Hello World</motion.h1>
            </motion.div>
            {/* <SliderBar /> */}
        </div>
    );
}

export default App;
