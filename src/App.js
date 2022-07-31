//importar componentes
//import { motion } from "framer-motion";
import SliderBar from "./components/NavBar/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Container/ItemDetailContainer/Index.jsx";
import ItemListContainer from "./Container/ItemListContainer/Index.jsx";
import Cart from ".//Container/Cart/Index";
import Checkout from "./components/modals/Checkout/Index";
import "./App.css";

import NotFound from "./components/NotFound/Index";
import ShopProvider from ".//Context/ShopContext";



//Renderizar componentes
function App() {

    return (
        <ShopProvider >
            <BrowserRouter >
                <SliderBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ShopProvider>

    );
}

export default App;
