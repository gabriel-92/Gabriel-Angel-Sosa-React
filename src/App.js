//importar componentes
//import { motion } from "framer-motion";
import SliderBar from "./components/NavBar/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Container/ItemDetailContainer/Index.jsx";
import ItemListContainer from "./Container/ItemListContainer/Index.jsx";
import Cart from ".//components/Cart/Index";
import "./App.css";

import NotFound from "./components/NotFound/Index";


//Renderizar componentes
function App() {

    return (

        <BrowserRouter>
            <SliderBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
