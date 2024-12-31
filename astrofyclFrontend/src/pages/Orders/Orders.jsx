import React from "react";
import ContainerOrders from "../../components/ContainerOrders/ContainerOrders";
import { OrdersWrapper } from "./OrdersStyles";

export const Orders = () => {
  return (
    <OrdersWrapper>
      <h2>Historial de compras</h2>
      <ContainerOrders />
    </OrdersWrapper>
  );
};
