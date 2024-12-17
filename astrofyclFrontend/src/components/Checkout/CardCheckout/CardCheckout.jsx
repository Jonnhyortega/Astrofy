import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../redux/cart/cartSlice";
import { ItemCard, ItemTitle } from "./CardCheckoutStyles";
import { cutThirdSpace } from "../../../utils/cutTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const CardCheckout = ({ cartItem }) => {
  return (
    <ItemCard>
      <FontAwesomeIcon icon={faCheck} />
      <img src={cartItem.image} alt={cartItem.title} />
      <ItemTitle>{cutThirdSpace(cartItem.title)}</ItemTitle>
      <span>{cartItem.quantity}</span>
    </ItemCard>
  );
};
