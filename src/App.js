//importar componentes
import { motion } from "framer-motion";
import SliderBar from "./components/NavBar/Index";
import "./App.css";
import ItemListContainer from "./Container/ItemListContainer/Index.jsx";


//Renderizar componentes
function App() {
    return (
        <motion.div>
            <SliderBar />
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="Title"
            >
                Desafió Nº3 - React - Gabriel Sosa
            </motion.h1>
            <ItemListContainer className="ItemContainer" greeting={"Hola"} />

        </motion.div>
    );
}

export default App;
