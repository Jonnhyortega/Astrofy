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
} from "./CartComponentStyles";
import {
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalActions,
  Button,
} from "./CardItemsStyles";
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

  const [isModal, setIsModal] = useState(false);

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
    setIsModal(false); 
  };
  
  const handleCancel = () => {
    setIsModal(false); 
    dispatch(toggleHiddenCart());
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
            <EmptyButton onClick={() => setIsModal(true)}>
              <CiTrash />
            </EmptyButton>
          </CheckoutBox>
        )}
      </CartContainer>

      {/* Modal de Confirmación */}
      {isModal && (
        <ModalBackground>
          <ModalContainer>
            <ModalContent>
              <h2>Confirmar Eliminación</h2>
              <p>¿Estás seguro que deseas eliminar este artículo?</p>
            </ModalContent>
            <ModalActions>
              <Button
                onClick={handleClearCart}
                style={{ backgroundColor: "red" }}
              >
                Eliminar
              </Button>
              <Button onClick={handleCancel}>Cancelar</Button>
            </ModalActions>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default Cart;
