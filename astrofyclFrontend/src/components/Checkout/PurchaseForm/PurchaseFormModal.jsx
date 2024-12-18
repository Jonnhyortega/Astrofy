import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  Form,
  Input,
  Checkbox,
  SubmitButton,
} from "./PurchaseFormModalStyles";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const PurchaseFormModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    name: "",
    cellphone: "",
    address: "",
    dni: "",
    cardNumber: "",
    cardName: "",
    cardCode: "",
    termsAccepted: false,
    products: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      products: cartItems.map((i) => i.name),
    };

    dispatch(clearCart());
    navigate("/purchase");
    onClose();
  };

  return (
    <ModalOverlay >
      <ModalContent>
          <CloseButton onClick={onClose}>✖</CloseButton>
        <ModalHeader>
          <h2>Datos de facturación</h2>
        </ModalHeader>

          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="number"
              maxLength={10}
              name="cellphone"
              placeholder="Apellido"
              value={formData.cellphone}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="address"
              placeholder="Dirección"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="email"
              placeholder="Correo electronico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="dni"
              placeholder="DNI"
              value={formData.dni}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="cardNumber"
              placeholder="Número de tarjeta de crédito"
              value={formData.cardNumber}
              onChange={handleChange}
              pattern="\d{19}"
              maxlength="19"
              required
            />
            <Input
              type="text"
              name="cardName"
              placeholder="Nombre en la tarjeta"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
            <Input
            style={{width: "50px"}}
              type="text"
              name="cardCode"
              placeholder="Código"
              maxLength={3}
              value={formData.cardCode}
              onChange={handleChange}
              required
            />
            <label style={{ color: "white" }}>
              <Checkbox
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              Acepto los términos y condiciones
            </label>
            <SubmitButton type="submit">Pagar</SubmitButton>
          </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PurchaseFormModal;
