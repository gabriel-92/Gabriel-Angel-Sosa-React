import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import ItemCount from "../../components/ItemCount/index";
import ItemList from "../../components/card/ItemList/Index";
import "./Styles.css";
import Loading from "../../components/Loading/Index";

// función Principal con el export
const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const params = useParams();

    // Hooks react para llamar la función
    useEffect(() => {
        //obteniendo datos
        const getProductos = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const data = await response.json();
                setProductos(data);
                setProductosFiltrados(data);
            } catch (error) {
                console.log("Hubo un error:");
                console.log(error);
            }
        };
        getProductos();
    }, []);

    useEffect(() => {
        if (params?.categoryId) {
            const productosFiltrados = productos.filter(
                (producto) => producto.category === params.categoryId
            );
            setProductosFiltrados(productosFiltrados);
        } else {
            setProductosFiltrados(productos);
        }
    }, [params, productos]);

    return (
        <div>
            {/* <ItemCount stock={stock} handleAdd={handleAdd} /> */}
            {productos.length !== 0 ? (
                <ItemList products={productosFiltrados} />
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default ItemListContainer;
