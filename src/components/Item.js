import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);
  const handleClick = () => {
    setIsAdded((prev) => !prev);
  };
  const itemClass = isAdded ? "in-cart" : "";
  const buttonClass = isAdded ? "remove" : "add";
  const buttonText = isAdded ? "Remove from Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
