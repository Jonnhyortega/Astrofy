import React, { useState } from "react";
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
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalActions
} from "./CardItemsStyles";
import { CiCirclePlus, CiCircleMinus, CiTrash } from "react-icons/ci";

export const CardItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const maxLengthTitle = 10;

  const handleIncrease = () => {
    dispatch(increaseQuantity(cartItem.id));
  };

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      setIsModalOpen(true); // Abre el modal si la cantidad es 1
    } else if (cartItem.quantity > 1) {
      dispatch(decreaseQuantity(cartItem.id));
    }
  };

  const handleDeleteItem = () => {
    dispatch(removeFromCart(cartItem.id));
    setIsModalOpen(false); // Cierra el modal
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Cierra el modal sin eliminar
  };

  return (
    <>
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
          <Button onClick={() => setIsModalOpen(true)}>
            <CiTrash />
          </Button>
        </Controls>
      </Card>

      {/* Modal de confirmación */}
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <ModalContent>
              <h2>Confirmar Eliminación</h2>
              <p>¿Estás seguro que deseas eliminar este artículo?</p>
            </ModalContent>
            <ModalActions>
              <Button onClick={handleDeleteItem} style={{ backgroundColor: "red" }}>
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
