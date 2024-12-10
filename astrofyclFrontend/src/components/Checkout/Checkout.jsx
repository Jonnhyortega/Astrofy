import React from "react";
import { CheckoutContainer, ContainerItems } from "./CheckoutStyles";
import { CardCheckout } from "./CardCheckout/CardCheckout";
import TotalPurchase from "./TotalPurchase/TotalPurchase";
import { useDispatch, useSelector } from "react-redux";

export default function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <CheckoutContainer>
      <h2>Productos</h2>
      <ContainerItems>
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <CardCheckout key={item.id} cartItem={item} />
          ))}
      </ContainerItems>
      <TotalPurchase />
    </CheckoutContainer>
  );
}
