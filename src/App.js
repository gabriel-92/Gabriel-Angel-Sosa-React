//importar componentes
//import { motion } from "framer-motion";
import SliderBar from "./components/NavBar/Index";
import "./App.css";
import ItemListContainer from "./Container/ItemListContainer/Index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/card/Modal/Index";
import NotFound from "./components/NotFound/Index";


//Renderizar componentes
function App() {

    return (
        <>
            <SliderBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/detail/:productId" element={<Modal />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
