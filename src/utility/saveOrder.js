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
                } else {
                    outOfStock.push(producto);
                }
            })
    })


    //Si hay productos fuera de stock, mostrar un mensaje de error y cerrar el batch
    if (outOfStock?.length === 0) {
        //Si no hay productos fuera de stock, agregar la orden al array de ordenes y guardarla en la db
        addDoc(collection(db, "orders"), order)
            .then(({ id }) => {
                //Ejecutar el batch
                batch.commit().then(() => {
                    Swal.fire({
                        title: "Orden guardada",
                        text: "La orden se ha guardado correctamente" + id,
                        icon: "success",
                        confirmButtonText: "Cerrar",
                        confirmButtonColor: "#f44336",
                        showConfirmButton: true,
                    });
                }
                    , (error) => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo guardar la orden" + error,
                            icon: "error",
                            confirmButtonText: "Cerrar",
                        });
                    }
                );
            }
            )
    }
}

export default saveOrder;

//     //Si el array auxiliar de productos fuera de stock esta vació, entonces generar la orden y guardarla en la db
//     if (outOfStock?.length === 0) {
//         (addDoc(collection(db, "orders"), order).then(({ id }) => {
//             batch.commit().then(() => {
//                 Swal.fire({
//                     title: "Orden guardada",
//                     text: "La orden se ha guardado correctamente" + id,
//                     icon: "success",
//                     confirmButtonText: "Ok",
//                 });
//             }).catch(() => {
//                 Swal.fire({
//                     title: "Error",
//                     text: "Error al guardar la orden",
//                     icon: "error",
//                     confirmButtonText: "Ok",
//                 });
//             });
//         })
//         );
//     }
// }


//             // ).catch(() => {
//             //     Swal.fire({
//             //         title: "Error",
//             //         text: "Error al guardar la orden",
//             //         icon: "error",
//             //         confirmButtonText: "Ok",
//             //     });
//             // }
//         );
//     }
// }

//         }
//         );
//     }
//     else (outOfStock.length === 0) {
//         addDoc(collection(db, "orders"), orden).then(({ id }) => {
//             batch.commit().then(() => {
//                 Swal.fire({
//                     title: "Orden realizada",
//                     text: "La orden se ha realizado correctamente" + id,
//                     icon: "success",
//                     confirmButtonText: "Ok",
//                 });
//             }
//             );
//         }
//         );
//     } console.log(outOfStock)
// }


//si hay producto fuera de stock,preguntar si quiere continuar con la orden si no, no generar la orden y mostrar un mensaje de error y si si, generar la orden pero sin el producto fuera de stock y mostrar un mensaje de error que avise que se quito el producto fuera de stock y que se genero la orden 



