import React, { useState, useEffect } from "react";
import ItemCount from "../../components/ItemCount/index";
import ItemList from "../../components/card/ItemList/Index";

import "./Styles.css";

// función Principal con el export
const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState(null);

    // Hooks react para llamar la función
    useEffect(() => {
        //obteniendo datos
        const getProductos = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const data = await response.json();
                console.log(data);
                setProductos(data);
            } catch (error) {
                console.log("Hubo un error:");
                console.log(error);
            }
        };
        getProductos();
    }, []);

    // variantes para el componente ItemCount
    const stock = 10;
    const handleAdd = () => {
        console.log("Se agregaron productos al carrito");
    };

    return (
        <div>
            <h1 className="ItemContainer">{greeting}</h1>
            <ItemCount stock={stock} handleAdd={handleAdd} />
            {productos ? <ItemList products={productos} /> : null}
        </div>
    );
};

export default ItemListContainer;
