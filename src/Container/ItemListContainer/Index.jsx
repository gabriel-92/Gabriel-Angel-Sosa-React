import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../fireBase/config";

import ItemList from "../../components/cardItems/ItemList/Index";
import "./Styles.css";
import Loading from "../../components/Loading/Index";

// función Principal con el export
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const params = useParams();

    // Hooks react para llamar la función
    useEffect(() => {
        //obteniendo datos
        const getProductos = async () => {
            try {
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = [];
                querySnapshot.forEach((doc) => {
                    productos.push({ id: doc.id, ...doc.data() });
                });

                setProductos(productos);
                setProductosFiltrados(productos);
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
            {productos.length !== 0 ? (
                <ItemList products={productosFiltrados} />
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default ItemListContainer;
