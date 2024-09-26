import React from "react";
import { ModalContainer, ModalContent, ModalActions } from "./ModalStyles";
export default function Modal() {
  return (
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
  );
}
