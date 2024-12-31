import React from "react";
import { Container, Notification } from "./PurchaseStyles";
import { getUserDataFromStorage } from "../../utils/userName";

export const Purchase = () => {
  const userNameToRender = getUserDataFromStorage("name");
  const userEmail = getUserDataFromStorage("email");
  return (
    <Container>
      <h2>Muchas gracias por su compra</h2>

      <Notification>
        En breve nos pondremos en contacto a su correo: {userEmail} para
        coordinar la entrega y ultimar detalles.
      </Notification>
    </Container>
  );
};

export default Purchase;
