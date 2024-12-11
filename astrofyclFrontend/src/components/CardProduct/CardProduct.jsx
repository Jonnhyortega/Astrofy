import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { CardWrapper } from "./CardProductStyles";
import { cutThirdSpace } from "../../utils/cutTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CardProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <CardWrapper>
      <h3>{cutThirdSpace(product.title)}</h3>
      <img src={product.image} alt={`Imagen de ${product.title}`} />
      <span>${product.price}</span>
      <button onClick={handleAddToCart}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      </button>
    </CardWrapper>
  );
};

export default CardProduct;
