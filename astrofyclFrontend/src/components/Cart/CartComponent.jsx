import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../redux/cart/cartSlice";
import {
  ModalOverlayStyled,
  CartContainer,
  Title,
  CartItemsContainer,
  CheckoutButton,
  CheckoutBox,
  CartSubTotal,
  CartTotal,
} from "./CartComponentStyles";
import { CardItem } from "./CardItem";
import { useNavigate } from "react-router-dom";
import { getUserDataFromStorage } from "../../utils/userName";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();
  const user = getUserDataFromStorage("verified");
  const cartTotal = Math.ceil(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0) +
      shippingCost
  );

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <CartContainer
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 900 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CartItemsContainer>
              <Title>Productos</Title>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <CardItem key={item.id} cartItem={item} />
                ))
              ) : (
                <span style={{ position: "absolute", left: "25px", top:"65px" }}>Carrito vacío</span>
              )}
            </CartItemsContainer>

            {cartItems.length > 0 && (
              <CheckoutBox>
                <CartSubTotal>
                  <p>Sub total sin envío: </p>
                  <p>
                    {cartTotal.toLocaleString("es-Ar", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </p>
                </CartSubTotal>

                <CartTotal>
                  <div className="total">
                    <p>Total:</p>
                    <p>
                      {cartTotal.toLocaleString("es-Ar", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </p>
                  </div>
                  <div className="discount">
                    <small>
                      O{" "}
                      <strong>
                        {Math.ceil(
                          cartTotal - (cartTotal * 15) / 100
                        ).toLocaleString("es-Ar", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </strong>{" "}
                      por transferencia bancaria
                    </small>
                    <a href="https://wa.me/1234567890">
                      Contactar por whatsapp
                    </a>
                  </div>
                </CartTotal>
                <CheckoutButton
                  onClick={() => {
                    dispatch(toggleHiddenCart());
                    if (user) {
                      navigate("/checkout");
                    } else {
                      navigate("/login");
                    }
                    return;
                  }}
                >
                  Iniciar compra
                </CheckoutButton>
              </CheckoutBox>
            )}
          </CartContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
