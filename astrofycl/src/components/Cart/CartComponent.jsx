import React, { useEffect, useRef, useState } from "react";
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
  ModalOverlay,
  ModalContent,
  ModalButton,
} from "./CartComponentStyles";
import { CardItem } from "./CardItem";
import { CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, hidden, shippingCost } = useSelector(
    (state) => state.cart
  );
  const cartRef = useRef(null);

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

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

  const reDirectCheckout = () => {
    navigate("/checkout");
    dispatch(toggleHiddenCart());
  };

  const cartTotal = Math.ceil(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0) +
      shippingCost
  );

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowModal(false); // Cerrar el modal después de confirmar
  };

  return (
    <>
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
            <CheckoutButton onClick={reDirectCheckout}>Comprar</CheckoutButton>
            {/* Mostrar el modal cuando se haga clic en el botón */}
            <EmptyButton onClick={() => setShowModal(true)}>
              <CiTrash />
            </EmptyButton>
          </CheckoutBox>
        )}
      </CartContainer>

      {/* Modal de Confirmación */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h2>¿Estás seguro de que deseas vaciar el carrito?</h2>
            <div>
              <ModalButton onClick={handleClearCart}>Confirmar</ModalButton>
              <ModalButton onClick={() => setShowModal(false)}>
                Cancelar
              </ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Cart;
