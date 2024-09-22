import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../redux/cart/cartSlice";
import {
  CartContainer,
  Title,
  CartItemsContainer,
  CartTotal,
  CheckoutButton,
  CloseButton,
  CheckoutBox,
  EmptyButton,
} from "./CartComponentStyles";
import { CardItem } from "./CardItem";
import { CiTrash } from "react-icons/ci";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, hidden, shippingCost } = useSelector(
    (state) => state.cart
  );
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (!hidden) {
          dispatch(toggleHiddenCart());
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch, hidden]);

  const handleCartClick = (event) => {
    event.stopPropagation();
  };

  const handleCloseCart = () => {
    dispatch(toggleHiddenCart());
  };

  const cartTotal = Math.ceil(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0) +
      shippingCost
  );

  return (
    <CartContainer hidden={hidden} ref={cartRef} onClick={handleCartClick}>
      <CloseButton onClick={handleCloseCart}>&times;</CloseButton>
      <CartItemsContainer>
        <Title>Productos</Title>
        {cartItems.length ? (
          cartItems.map((item) => <CardItem key={item.id} cartItem={item} />)
        ) : (
          <span>Tu carrito está vacío</span>
        )}
      </CartItemsContainer>
      {cartItems.length > 0 && (
        <CheckoutBox>
          <CartTotal>Total: ${cartTotal}</CartTotal>
          <CheckoutButton>Comprar</CheckoutButton>
          <EmptyButton onClick={() => dispatch(clearCart())}>
            <CiTrash />
          </EmptyButton>
        </CheckoutBox>
      )}
    </CartContainer>
  );
};

export default Cart;
