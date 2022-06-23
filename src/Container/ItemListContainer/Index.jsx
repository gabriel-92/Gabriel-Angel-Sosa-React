import React from "react";
import ItemCount from "../../components/ItemCount";
import "./Styles.css";

const handleAdd = () => {
    console.log("Se agregaron productos al carrito");

    //si yo quisiera mostrar un mensaje asi,
    // !" console.log("Se agrego " + { count } + " producto / s ");"
    // que diga exactamente el numero que estoy agregando como lo podría hacer ?
    // por ejemplo yo quisiera mostrar ese numero que me dala función y aplicarlo
    //en el botón del carrito del NavBar
    //
};
const stock = 10;
const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className="ItemContainer">{greeting}</h1>
            <ItemCount stock={stock} handleAdd={handleAdd} />
        </div>
    );
};

export default ItemListContainer;
