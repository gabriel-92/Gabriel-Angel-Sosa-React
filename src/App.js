//importar componentes
import { motion } from "framer-motion";
import SliderBar from "./components/sliderBar";

//Renderizar componentes
function App() {
    return (
        <>
            <motion.div className="App">
                <SliderBar />
                <motion.h1
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                >
                    Desafió Nº2 - React - Gabriel Sosa
                </motion.h1>
            </motion.div>
        </>
    );
}

export default App;
