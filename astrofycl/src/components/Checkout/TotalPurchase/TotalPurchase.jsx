import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PurchaseContainer,
  TotalText,
  TotalAmount,
  ButtonGroup,
  FinalizeButton,
  CancelButton
} from "./TotalPurchaseStyles";
import PurchaseFormModal from "../PurchaseForm/PurchaseFormModal";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import { useSelector } from "react-redux";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"; 

const TotalPurchase = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false); 
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const cartTotal = Math.ceil(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
  );

  const handleCancel = () => {
    setShowCancelModal(true);
  };

  const handleFinalize = () => {
    setShowPurchaseModal(true);
  };

  const handleClosePurchaseModal = () => {
    setShowPurchaseModal(false);
  };

  const handleConfirmCancel = () => {
    setShowCancelModal(false);
    navigate("/");
  };

  const handleCloseCancelModal = () => {
    setShowCancelModal(false);
  };

  return (
    <>
      <PurchaseContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>${cartTotal.toLocaleString("es-AR")}</TotalAmount>
        <ButtonGroup>
          <FinalizeButton onClick={handleFinalize}>
            <AiOutlineCheckCircle size={24} />
          </FinalizeButton>
          <CancelButton onClick={handleCancel}>
            <AiOutlineCloseCircle size={24} />
          </CancelButton>
        </ButtonGroup>
      </PurchaseContainer>

      {showPurchaseModal && (
        <PurchaseFormModal
          onClose={handleClosePurchaseModal}
          total={cartTotal}
        />
      )}

      {showCancelModal && (
        <ConfirmationModal
          onConfirm={handleConfirmCancel}
          onClose={handleCloseCancelModal}
          message="¿Estás seguro que deseas cancelar la compra?"
        />
      )}
    </>
  );
};

export default TotalPurchase;
