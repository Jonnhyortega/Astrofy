import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Message,
  Notification,
} from "./PurchaseStyles";
export const Purchase = () => {
  const purchaseFormData = useSelector((state) => state.purchaseForm);

  return (
    <Container>
      <h2>
        Muchas gracias {purchaseFormData.name}{" "}
        por su compra
      </h2>

      <Notification>
        Le hemos enviado un correo electrónico a {purchaseFormData.email} para
        que pueda seguir el estado de su operación.
      </Notification>
    </Container>
  );
};

export default Purchase;
