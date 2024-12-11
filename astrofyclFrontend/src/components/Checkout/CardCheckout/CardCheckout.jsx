import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../redux/cart/cartSlice";
import {
  ItemCard,
  ItemTitle,
} from "./CardCheckoutStyles";
import { cutThirdSpace } from "../../../utils/cutTitle";

export const CardCheckout = ({ cartItem }) => {


  return (
    <ItemCard>
      <ItemTitle>
        {cutThirdSpace(cartItem.title)}
      </ItemTitle>
        <span>{cartItem.quantity}</span>
    </ItemCard>
  );
};
