//?Importaciones de librerías necesarias
import {
    addDoc,
    collection,
    doc,
    getDoc,
    writeBatch,
} from "firebase/firestore";
import { db } from "../fireBase/config.js";
import Swal from "sweetalert2";


const saveOrder = (cart, order) => {
    //Primer paso: abrir un batch
    const batch = writeBatch(db);

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = [];

    //Chequear el stock del producto en nuestra db y si no hay stock, agregarlo al array auxiliar de productos fuera de stock y mostrar un mensaje de error  y cerrar el forEach que recorre el carrito  para no generar una orden por cada product del cart
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, "products", productoEnCart.id)).then(
            async (documentSnapshot) => {
                const producto = {
                    ...documentSnapshot.data(),
                    id: documentSnapshot.id,
                };
                if (producto.stock >= productoEnCart.quantity) {
                    batch.update(doc(db, "products", producto.id), {
                        stock: producto.stock - productoEnCart.quantity,
                    });
                } else { // preguntar si el producto esta fuera de stock y agregarlo al array de productos fuera de stock
                    outOfStock.push(producto);
                }
            })
    })
    //? la saque  afuera del forEach para que no se ejecute varias veces
    if (outOfStock.length === 0) {
        //Si no hay productos fuera de stock, agregar la orden al array de ordenes y guardarla en la db
        addDoc(collection(db, "orders"), order)
            .then(({ id }) => {
                //Ejecutar el batch
                batch.commit().then(() => {
                    Swal.fire({
                        title: "Order saved",
                        text: "The order with the ID :  " + id + " was generated successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                        confirmButtonColor: "#f44336",
                        showConfirmButton: true,
                    });
                });
            }
            ).catch((error) => {
                Swal.fire({
                    title: "Error",
                    text: " The order cannot be generated" + error,
                    icon: "error",
                    confirmButtonText: "Close",
                    confirmButtonColor: "#f44336",
                    showConfirmButton: true,
                });
            }
            );
    } else {
        Swal.fire({
            title: "Error",
            text: "The order cannot be generated because the product " + outOfStock[0].title + " is out of stock",
            icon: "error",
            confirmButtonText: "Close",
            confirmButtonColor: "#f44336",
            showConfirmButton: true,
        });
    }
}

export default saveOrder;
