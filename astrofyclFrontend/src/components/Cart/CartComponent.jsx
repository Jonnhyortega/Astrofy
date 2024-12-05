import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../redux/cart/cartSlice";
import {
  CartContainer,
  Title,
  CartItemsContainer,
  CheckoutButton,
  CloseButton,
  CheckoutBox,
  CartSubTotal,
  CartTotal,
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
  const navigate = useNavigate();
  const { cartItems, hidden, shippingCost } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
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
          <Title>Carrito de compras</Title>
          {cartItems.length ? (
            cartItems.map((item) => <CardItem key={item.id} cartItem={item} />)
          ) : (
            <span>Tu carrito está vacío</span>
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

            {/* <ShippingBox>
            <ShippBox1 onClick={handleShipping}>
              <p>Medios de envío</p>
              <p>{shippingModalOpen ? "-" : "+"}</p>
            </ShippBox1>

            {shippingModalOpen && (
              <ControlsInfoShipping>
                <ControlsA>
                  <input type="number" placeholder="Código postal" />
                  <button>OK</button>
                </ControlsA>
                <a
                  target="blank"
                  href="https://www.correoargentino.com.ar/formularios/cpa"
                >
                  No sé mi código postal
                </a>
              </ControlsInfoShipping>
            )}
          </ShippingBox> */}

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
                    $
                    {Math.ceil(
                      cartTotal - (cartTotal * 15) / 100
                    ).toLocaleString("es-Ar", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </strong>{" "}
                  por transferencia bancaria
                </small>
                <a>Contactar por whatsapp</a>
              </div>
            </CartTotal>
             <CheckoutButton onClick={reDirectCheckout}>Iniciar compra</CheckoutButton>           
            
          </CheckoutBox>
        )}

        
      </CartContainer>

      {isModal && (
        <ModalBackground>
          <ModalContainer>
            <ModalContent>
              <h2>Confirmar Eliminación</h2>
              <p>¿Estás seguro que deseas vaciar el carrito?</p>
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
