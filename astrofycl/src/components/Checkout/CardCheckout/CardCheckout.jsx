import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../redux/cart/cartSlice";
import {
  ItemCard,
  ItemThumbnail,
  ItemTitle,
  ItemPrice,
  ItemControls,
  ItemButton,
} from "./CardCheckoutStyles";
import { CiCirclePlus, CiCircleMinus, CiTrash } from "react-icons/ci";

export const CardCheckout = ({ cartItem }) => {
  const dispatch = useDispatch();
  const maxLengthTitle = 10;

  const handleIncrease = () => {
    dispatch(increaseQuantity(cartItem.id));
  };

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      dispatch(removeFromCart(cartItem.id));
    } else if (cartItem.quantity > 1) {
      dispatch(decreaseQuantity(cartItem.id));
    }
  };

  const handleDeleteItem = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <ItemCard>
      <ItemThumbnail src={cartItem.image} alt={cartItem.title} />
      <ItemTitle>
        {cartItem.title.length > maxLengthTitle
          ? cartItem.title.substring(0, maxLengthTitle) + "..."
          : cartItem.title}
      </ItemTitle>
      <ItemPrice>${cartItem.price}</ItemPrice>
      <ItemControls>
        <ItemButton onClick={handleDecrease}>
          <CiCircleMinus />
        </ItemButton>
        <span>{cartItem.quantity}</span>
        <ItemButton onClick={handleIncrease}>
          <CiCirclePlus />
        </ItemButton>
        <ItemButton onClick={handleDeleteItem}>
          <CiTrash />
        </ItemButton>
      </ItemControls>
    </ItemCard>
  );
};
