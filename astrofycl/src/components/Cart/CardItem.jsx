import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cart/cartSlice";
import {
  Card,
  Thumbnail,
  Title,
  Price,
  Controls,
  Button,
} from "./CardItemsStyles";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export const CardItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const maxLengthTitle = 10;
  const handleIncrease = () => {
    dispatch(increaseQuantity(cartItem.id));
  };

  const handleDecrease = () => {
      if(cartItem.quantity == 1){
      dispatch(removeFromCart(cartItem.id))
    } else if (cartItem.quantity > 1) {
      dispatch(decreaseQuantity(cartItem.id));
    }
  };

  const handleDeleteItem = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <Card>
      <Thumbnail src={cartItem.image} alt={cartItem.title} />
      <Title>
        {cartItem.title.length > maxLengthTitle
          ? cartItem.title.substring(0, maxLengthTitle) + "..."
          : cartItem.title}
      </Title>
      <Price>${cartItem.price}</Price>
      <Controls>
        <Button onClick={handleDecrease}>
          <CiCircleMinus />
        </Button>
        <span>{cartItem.quantity}</span>
        <Button onClick={handleIncrease}>
          <CiCirclePlus />
        </Button>
        <Button onClick={handleDeleteItem}>
          <CiTrash />
        </Button>
      </Controls>
    </Card>
  );
};
