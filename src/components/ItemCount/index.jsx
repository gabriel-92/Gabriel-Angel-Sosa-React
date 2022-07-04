import React, { useState } from "react";

function ItemCount({ handleAdd, stock }) {
    const [count, setCount] = useState(1);

    const aumentar = () => {
        setCount(count >= stock ? count : count + 1);
    };

    const disminuir = () => {
        setCount(count <= 0 ? count : count - 1);
    };

    return (
        <>
            <div className="ItemContainer">
                <h1>{count}</h1>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={disminuir}>Disminuir</button>
                <button onClick={handleAdd}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;
