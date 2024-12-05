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
  Info,
  Name,
  Price,
  Controls,
  QuantityControls,
  Quantity,
  Button,
  ModalBackground,
  ModalContainer,
  ModalContent,
  ModalActions,
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
      setIsModalOpen(true);
    } else if (cartItem.quantity > 1) {
      dispatch(decreaseQuantity(cartItem.id));
    }
  };

  const handleDeleteItem = () => {
    dispatch(removeFromCart(cartItem.id));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card>
        <Thumbnail src={cartItem.image} alt={cartItem.title} />

        <Info>
          <Name>{cartItem.title.substring(0, 10)}</Name>
          <Price>${cartItem.price.toLocaleString()}</Price>
        </Info>


        <Controls>
          <QuantityControls>
            <Button onClick={handleDecrease}>
              <CiCircleMinus />
            </Button>
            <Quantity>{cartItem.quantity}</Quantity>
            <Button onClick={handleIncrease}>
              <CiCirclePlus />
            </Button>
          </QuantityControls>
          <Button onClick={() => setIsModalOpen(true)}>
            <CiTrash />
          </Button>
        </Controls>
      </Card>

      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <ModalContent>
              <h2>Confirmar Eliminación</h2>
              <p>¿Estás seguro que deseas eliminar este artículo?</p>
            </ModalContent>
            <ModalActions>
              <Button
                onClick={handleDeleteItem}
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
