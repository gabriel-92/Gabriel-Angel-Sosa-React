import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//componentes
import ItemDetail from "../../components/card/ItemDetail/Index";
import Loading from "../../components/Loading/Index";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});

    const params = useParams();

    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${params.productId}`
                );
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProductos();
    }, [params]);

    return Object.keys(productDetail).length !== 0 ? (
        <ItemDetail product={productDetail} />
    ) : (
        <Loading />
    );
};

export default ItemDetailContainer;
