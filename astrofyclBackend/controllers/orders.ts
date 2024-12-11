import { Response, Request } from "express";
import Order, { IOrder } from "../models/order";
import { ObjectId } from "mongoose";

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  const usuarioId = req.body.usuarioConfirmado._id;
  console.log(usuarioId);

  const consulta = { user: usuarioId };
  console.log(consulta);

  const orders = await Order.find({ consulta });
  console.error(orders)
  res.json({
    orders
  });
};

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const usuario: ObjectId = req.body.usuarioConfirmado._id;

  const orderData: IOrder = req.body;

  const data = {
    ...orderData,
    user: usuario,
    createdDate: new Date(),
    status: "pending",
  };

  const order = new Order(data);

  order.save();

  res.status(201).json({
    order,
  });
};
