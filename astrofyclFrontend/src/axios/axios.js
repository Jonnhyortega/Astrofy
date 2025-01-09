import axios from "axios";
import {
  ALL_PRODUCTS,
  URL_API_BASE,
  LOGIN,
  REGISTER,
  VERIFY,
  CREATE_ORDER,
  GET_ORDERS,
  VERIFYJWT,
} from "../utils/api";
import { getUserDataFromStorage } from "../utils/userName";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(URL_API_BASE + ALL_PRODUCTS);
    return response.data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};

export const fetchLogin = async (credentials) => {
  try {
    const response = await axios.post(URL_API_BASE + LOGIN, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error(
      "Error al realizar la solicitud:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(URL_API_BASE + REGISTER, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async (userData) => {
  try {
    const response = await axios.patch(URL_API_BASE + VERIFY, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createOrder = async (shippingDetails, cartItems) => {
  const token =
    localStorage.getItem("tokenAuth") || sessionStorage.getItem("tokenAuth");

  try {
    const orderData = {
      usuarioConfirmado: {
        _id: getUserDataFromStorage("_id"),
      },
      items: cartItems.map((i) => ({
        product: i._id,
        quantity: i.quantity,
      })),
      shippingDetails: shippingDetails,
      shippingCost: "500",
    };

    const response = await axios.post(URL_API_BASE + CREATE_ORDER, orderData, {
      headers: {
        "x-token": token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOrders = async () => {
  const token =
    localStorage.getItem("tokenAuth") || sessionStorage.getItem("tokenAuth");
  const userId = getUserDataFromStorage("_id");
  try {
    const response = await axios.get(`${URL_API_BASE}${GET_ORDERS}`, {
      headers: {
        "x-token": token,
      },
      params: { userId },
    });
    return response.data.orders;
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
    return error.response.data.msg;
  }
};

export const validateToken = async () => {
  const token =
    localStorage.getItem("tokenAuth") || sessionStorage.getItem("tokenAuth");
  const userId = getUserDataFromStorage("_id");

  if (token) {
    try {
      const response = await axios.get(`${URL_API_BASE}${VERIFYJWT}`, {
        headers: { "x-token": token },
        params: { userId },
      });
      return response.data;
    } catch (error) {
      console.error("Error validating token:", error);

      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.msg === "Token expirado"
      ) {
        throw new Error("Token expirado");
      }

      throw error;
    }
  } else {
    return null;
  }
};
