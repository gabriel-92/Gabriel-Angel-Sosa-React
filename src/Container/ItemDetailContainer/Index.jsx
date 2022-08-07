//?Importaciones de librerías necesarias
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fireBase/config";
//?Importaciones de componentes necesarios
import Loading from "../../components/Loading/Index";
import ItemDetail from "../../components/modals/ItemDetail/Index";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});

    const params = useParams();

    useEffect(() => {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const productDetail = {
                        id: docSnap.id,
                        ...docSnap.data(),
                    };
                    setProductDetail(productDetail);
                } else {
                    console.log("No such document!");
                }
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
