import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//componentes
import ItemDetail from "../../components/card/ItemDetail/Index";
import Loading from "../../components/Loading/Index";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fireBase/config";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});

    const params = useParams();

    useEffect(() => {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log(docSnap.id);
                    console.log("Document data:", docSnap.data());
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
