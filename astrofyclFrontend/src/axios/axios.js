import axios from "axios";
import {
  ALL_PRODUCTS,
  URL_API_BASE,
  LOGIN,
  REGISTER,
  VERIFY,
} from "../utils/api";

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
// Acceder al token para futuras solicitudes
// const authToken = localStorage.getItem('authToken');

// axios.js

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(URL_API_BASE + REGISTER, userData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw error;
  }
};

export const verifyUser = async (userData) => {
  try {
    const response = await axios.patch(URL_API_BASE + VERIFY, userData);
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    throw error
  }
};
