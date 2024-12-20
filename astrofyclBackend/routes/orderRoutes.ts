import Router from "express";
import { searchErrors } from "../middlewares/searchErrors";
import { createOrder, getOrders } from "../controllers/orders";
import validarJWT from "../middlewares/validateJWT";
import { isVerified } from "../middlewares/validateVerified";
import { check } from "express-validator";

const router = Router();

router.post(
  "/create-order",
  [
    validarJWT,
    isVerified,
    check("shippingCost", "El costo de envío es obligatorio").not().isEmpty(),
    check("shippingDetails", "Los detalles de envío son obligatorios")
      .not()
      .isEmpty(),
    check("items", "El array de productos es obligatorio").not().isEmpty(),
    searchErrors,
  ],
  createOrder
);

router.get("/all-orders", validarJWT, getOrders);


export default router
