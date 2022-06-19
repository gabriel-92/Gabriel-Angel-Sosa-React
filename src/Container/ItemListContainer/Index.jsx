import React from "react";
import "./Styles.css";

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className="ItemContainer">{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;
