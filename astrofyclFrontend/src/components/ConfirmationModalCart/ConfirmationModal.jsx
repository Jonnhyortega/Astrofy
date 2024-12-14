
import React from 'react'

export default function ConfirmationModalStyles() {
  return (
    <ModalWrapper>
            <div>
              <h2>Confirmar Eliminación</h2>
              <p>¿Estás seguro que deseas eliminar este artículo?</p>
            </div>
            <div>
              <Button
                onClick={handleDeleteItem}
                style={{ backgroundColor: "red" }}
              >
                Eliminar
              </Button>
              <Button onClick={handleCancel}>Cancelar</Button>
            </div>
        </ModalWrapper>
  )
}
