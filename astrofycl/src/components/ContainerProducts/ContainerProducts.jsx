import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setProducts,
  setStatus,
  setError,
} from "../../redux/allproducts/allProductsSlice";
import CardProduct from "../CardProduct/CardProduct";
import {
  Container,
  Title,
  CategoriesButton,
  LoadMoreButton,
  BoxCatButtons,
  ContainerOfProducts,
} from "./ContainerProductsStyles";
import { translateCategory } from "../../utils/firstLetterUpper";
import LoaderAstro from "../Loader/LoaderAstro";

const ErrorComponent = ({ message }) => (
  <div style={{ color: "red", textAlign: "center" }}>
    <p>{message}</p>
  </div>
);

const ContainerProducts = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const [productosVisibles, setProductosVisibles] = useState(4);
  const [url, setUrl] = useState("https://fakestoreapi.com/products");

  const JEWELRY_DATA_BASE =
    "https://fakestoreapi.com/products/category/jewelery";
  const MENSCLOTHES_DATA_BASE =
    "https://fakestoreapi.com/products/category/men's%20clothing";
  const WOMENSCLOTHES_DATA_BASE =
    "https://fakestoreapi.com/products/category/women's%20clothing";
  const ELECTRONICS_DATA_BASE =
    "https://fakestoreapi.com/products/category/electronics";
  const ALLPRODUCTS_DATA_BASE = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setStatus("loading"));
      try {
        const response = await axios.get(url);
        if (Array.isArray(response.data)) {
          dispatch(setProducts(response.data));
          dispatch(setStatus("succeeded"));
        } else {
          throw new Error("La respuesta de la API no es un array.");
        }
      } catch (err) {
        dispatch(setError(err.message));
        dispatch(setStatus("failed"));
      }
    };

    fetchData();
  }, [dispatch, url]);

  const cargarMasProductos = () => {
    setProductosVisibles((prev) =>
      products.length ? (prev === 4 ? products.length : 4) : 4
    );
  };

  const handleCategories = (category) => {
    switch (category) {
      case "Joyas":
        setUrl(JEWELRY_DATA_BASE);
        setProductosVisibles(4);
        break;
      case "Ropa de hombre":
        setUrl(MENSCLOTHES_DATA_BASE);
        setProductosVisibles(4);
        break;
      case "Ropa de mujer":
        setUrl(WOMENSCLOTHES_DATA_BASE);
        setProductosVisibles(4);
        break;
      case "Electronica":
        setUrl(ELECTRONICS_DATA_BASE);
        setProductosVisibles(4);
        break;
      default:
        setUrl(ALLPRODUCTS_DATA_BASE);
        setProductosVisibles(4);
    }
  };

  const renderCategoryTitle = () => {
    try {
      if (products.length > 0 && products[0]?.category) {
        return translateCategory(products[0].category);
      } else {
        throw new Error("Category is undefined");
      }
    } catch (err) {
      console.error("Error rendering category title:", err);
      return <ErrorComponent message="Error: Unable to render category" />;
    }
  };

  return (
    <ContainerOfProducts>
      <BoxCatButtons>
        <Title>
          {url === ALLPRODUCTS_DATA_BASE
            ? "Nuestros productos"
            : renderCategoryTitle()}
        </Title>

        <CategoriesButton
          isActive={url === MENSCLOTHES_DATA_BASE}
          onClick={() => handleCategories("Ropa de hombre")}
        >
          Ropa de hombre
        </CategoriesButton>
        <CategoriesButton
          isActive={url === WOMENSCLOTHES_DATA_BASE}
          onClick={() => handleCategories("Ropa de mujer")}
        >
          Ropa de mujer
        </CategoriesButton>
        <CategoriesButton
          isActive={url === ELECTRONICS_DATA_BASE}
          onClick={() => handleCategories("Electronica")}
        >
          Electronica
        </CategoriesButton>
        <CategoriesButton
          isActive={url === JEWELRY_DATA_BASE}
          onClick={() => handleCategories("Joyas")}
        >
          Joyas
        </CategoriesButton>
        <CategoriesButton
          isActive={url === ALLPRODUCTS_DATA_BASE}
          onClick={() => handleCategories("Todos")}
        >
          Todos
        </CategoriesButton>
      </BoxCatButtons>

      {status === "loading" && <LoaderAstro />}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && Array.isArray(products) && (
        <Container>
          {products.length > 0 ? (
            products
              .slice(0, productosVisibles)
              .map((product) => (
                <CardProduct key={product.id} product={product} status={status} />
              ))
          ) : (
            <ErrorComponent message="No products available." />
          )}

          {products.length > 4 && (
            <LoadMoreButton onClick={cargarMasProductos}>
              {productosVisibles === 4
                ? "Ver más productos"
                : "Ver menos productos"}
            </LoadMoreButton>
          )}
        </Container>
      )}
    </ContainerOfProducts>
  );
};

export default ContainerProducts;
