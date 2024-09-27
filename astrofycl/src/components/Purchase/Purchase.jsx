import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Message,
  Notification,
} from "./PurchaseStyles";
import {Title} from "../ContainerProducts/ContainerProductsStyles"
export const Purchase = () => {
  const purchaseFormData = useSelector((state) => state.purchaseForm);

  return (
    <Container>
      <Title>
        Muchas gracias {purchaseFormData.name}{" "}
        por su compra
      </Title>

      <Notification>
        Le hemos enviado un correo electrónico a {purchaseFormData.email} para
        que pueda seguir el estado de su operación.
      </Notification>
    </Container>
  );
};

export default Purchase;
