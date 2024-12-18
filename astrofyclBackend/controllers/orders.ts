import { Response, Request } from "express";
import Order, { IOrder } from "../models/order";
import { ObjectId, Types } from "mongoose";
import Product, { IProduct } from "../models/product";

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  const usuarioId = req.body.usuarioConfirmado._id;
  console.log(usuarioId);

  const consulta = { user: usuarioId };
  console.log(consulta);

  const orders = await Order.find(consulta);
  console.error(orders);

  res.json({
    orders,
  });
};

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuario: Types.ObjectId = req.body.usuarioConfirmado._id;
    const { items, shippingDetails, shippingCost } = req.body;

    if (!items || items.length === 0) {
      res
        .status(400)
        .json({ message: "La orden debe contener al menos un producto." });
      return;
    }

    let totalProductPrice = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        res
          .status(404)
          .json({ message: `Producto con ID ${item.product} no encontrado.` });
        return;
      }
      totalProductPrice += product.price * item.quantity;
    }

    // Calculamos el precio total de la orden incluyendo el costo de envío
    const total = totalProductPrice + shippingCost;

    // Creamos la orden
    const orderData: IOrder = {
      createdAt: new Date(),
      user: usuario,
      price: totalProductPrice,
      shippingCost,
      items,
      shippingDetails,
      status: "pending",
      total,
    };

    const order = new Order(orderData);
    await order.save();

    res.status(201).json({
      message: "Orden creada exitosamente.",
      order,
    });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ message: "Hubo un error al procesar la orden." });
  }
};
