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
import Loader from "../../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../axios/axios";
import ModalAdvertising from "../../ModalAdvertising/ModalAdvertising";
import { helix } from "ldrs";
helix.register();

const PurchaseFormModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [error, setError] = useState("");
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    cellphone: "",
    address: "",
    dni: "",
    email: "",
    cardNumber: "",
    cardName: "",
    cardCode: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [advertising, setAdvertising] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "termsAccepted") {
      setTermsAccepted(e.target.checked);
    } else {
      setShippingDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!termsAccepted) {
      newErrors.termsAccepted = "Debes aceptar los términos y condiciones";
    }

    if (shippingDetails.cardNumber.length !== 16) {
      newErrors.cardNumber =
        "El número de tarjeta debe contener exactamente 16 dígitos.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await createOrder(shippingDetails, cartItems);
      dispatch(clearCart());
      navigate("/purchase");
      onClose();
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setError("Ocurrió un error al procesar tu pedido. Inténtalo de nuevo.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <ModalHeader>
          <h2>{!loading && "Datos de facturación"}</h2>
        </ModalHeader>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {loading ? (
          <l-helix size="45" speed="2.5" color="black"></l-helix>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              value={shippingDetails.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <small style={{ color: "red" }}>{errors.name}</small>
            )}

            <Input
              type="tel"
              name="cellphone"
              placeholder="Teléfono"
              value={shippingDetails.cellphone}
              onChange={handleChange}
              required
            />
            {errors.cellphone && (
              <small style={{ color: "red" }}>{errors.cellphone}</small>
            )}

            <Input
              type="text"
              name="address"
              placeholder="Dirección"
              value={shippingDetails.address}
              onChange={handleChange}
              required
            />
            {errors.address && (
              <small style={{ color: "red" }}>{errors.address}</small>
            )}

            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={shippingDetails.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )}

            <Input
              type="text"
              name="dni"
              placeholder="DNI"
              value={shippingDetails.dni}
              onChange={handleChange}
              required
            />
            {errors.dni && <small style={{ color: "red" }}>{errors.dni}</small>}

            <Input
              type="text"
              name="cardNumber"
              placeholder="Número de tarjeta de crédito"
              value={shippingDetails.cardNumber}
              onChange={handleChange}
              pattern="\d{16}"
              maxLength="16"
              required
            />
            {errors.cardNumber && (
              <small style={{ color: "red" }}>{errors.cardNumber}</small>
            )}

            <Input
              type="text"
              name="cardName"
              placeholder="Nombre en la tarjeta"
              value={shippingDetails.cardName}
              onChange={handleChange}
              required
            />
            {errors.cardName && (
              <small style={{ color: "red" }}>{errors.cardName}</small>
            )}

            <Input
              style={{ width: "50px" }}
              type="text"
              name="cardCode"
              placeholder="Código"
              maxLength={3}
              value={shippingDetails.cardCode}
              onChange={handleChange}
              required
            />
            {errors.cardCode && (
              <small style={{ color: "red" }}>{errors.cardCode}</small>
            )}

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: " 8px",
                fontSize: "14px",
                color: "#333",
                cursor: "pointer",
              }}
            >
              <Checkbox
                type="checkbox"
                name="termsAccepted"
                checked={termsAccepted}
                onChange={handleChange}
                required
              />
              Acepto los términos y condiciones
            </label>
            {errors.termsAccepted && (
              <small style={{ color: "red" }}>{errors.termsAccepted}</small>
            )}

            <SubmitButton type="submit">
              {loading ? <Loader /> : "Pagar"}
            </SubmitButton>
          </Form>
        )}
      </ModalContent>

      {Object.keys(errors).length > 0 && (
        <ModalAdvertising
          text={advertising}
          work={() => {
            setErrors({});
          }}
        />
      )}
    </ModalOverlay>
  );
};

export default PurchaseFormModal;
