import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalMessage,
  ModalButtons,
  ConfirmButton,
  CloseButton,
} from "./ConfirmationModalStyles";

const ConfirmationModal = ({ onConfirm, onClose, message }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalMessage>{message}</ModalMessage>
        <ModalButtons>
          <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
          <CloseButton onClick={onClose}>Cancelar</CloseButton>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
