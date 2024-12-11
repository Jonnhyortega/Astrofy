import axios from "axios";
import { ALL_PRODUCTS, URL_API_BASE } from "../utils/api";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(URL_API_BASE + ALL_PRODUCTS);
    return response.data
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};
