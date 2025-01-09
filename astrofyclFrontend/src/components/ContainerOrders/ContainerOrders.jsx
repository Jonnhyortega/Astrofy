import React, { useEffect, useState } from "react";
import {
  ContainerOrdersWrapper,
  ToggleDetailsButton,
} from "./ContainerOrdersStyles";
import { getOrders } from "../../axios/axios";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";

export const ContainerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalOrders = async () => {
      try {
        const ordersResponse = await getOrders();
        if (Array.isArray(ordersResponse)) {
          setOrders(ordersResponse);
        }
      } catch (error) {
        console.error("Error al obtener órdenes:", error);
      } finally {
        setLoading(false);
      }
    };
    getTotalOrders();
  }, []);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <ContainerOrdersWrapper>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {orders.length > 0 ? (
            orders.map((order) => (
              <motion.article
                key={order._id}
                onClick={() => toggleOrderDetails(order._id)}
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p>
                  <strong>Fecha de la compra:</strong>{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <ToggleDetailsButton
                  onClick={() => toggleOrderDetails(order._id)}
                >
                  {expandedOrderId === order._id
                    ? "Ocultar items"
                    : "Ver items"}
                </ToggleDetailsButton>
                <AnimatePresence>
                  {expandedOrderId === order._id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="item-list">
                        {order.items.map((item) => (
                          <li key={item.product._id}>
                            <img
                              src={item.product.image}
                              alt={item.product.title}
                            />
                            <p>{item.product.title}</p>{" "}
                            <span> ${item.product.price.toLocaleString()}</span>
                            <p className="unity">x{item.quantity}</p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <p>
                  <strong>Compra por:</strong> ${order.total.toLocaleString()}
                </p>
              </motion.article>
            ))
          ) : (
            <p style={{ color: "white" }}>No hay órdenes disponibles.</p>
          )}
        </div>
      )}
    </ContainerOrdersWrapper>
  );
};

export default ContainerOrders;
