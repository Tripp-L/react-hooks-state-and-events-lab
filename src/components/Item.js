import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const handleAddToCart = () => {
    setInCart(true)
  };
  const handleRemoveFromCart = () => {
    setInCart(false)
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={inCart ? handleRemoveFromCart : handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Carty"}
      </button>
    </li>
  );
}

export default Item;
