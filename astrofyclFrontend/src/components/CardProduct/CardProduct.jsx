import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { CardWrapper } from "./CardProductStyles";
import { cutThirdSpace } from "../../utils/cutTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CardProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [stars, setStars] = useState("");

  const handleAddToCart = () => {
    console.log(product);
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const setStarsForPrice = () => {
      if (product.price <= 15) {
        setStars("⭐⭐");
      } else if (product.price > 15 && product.price <= 50) {
        setStars("⭐⭐⭐");
      } else if (product.price > 50 && product.price <= 150) {
        setStars("⭐⭐⭐⭐");
      } else if (product.price > 150) {
        setStars("⭐⭐⭐⭐⭐");
      }
    };

    setStarsForPrice();
  }, []);

  return (
    <CardWrapper>
      <img src={product.image} alt={`Imagen de ${product.title}`} />
      <h3>{cutThirdSpace(product.title)}</h3>
      <p className="stars">{stars}</p>
      <span>${product.price.toLocaleString()}</span>
      <div className="discount">
        {`$${(
          product.price -
          (10 / 100) * product.price
        ).toLocaleString()} por transferencia`}
      </div>
      <button onClick={handleAddToCart}>
        <span>Agregar</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </CardWrapper>
  );
};

export default CardProduct;
