import React, { useEffect, useState } from "react";
import { FeaturedProductsContainer, Container } from "./FeaturedProductStyles";
import { Title } from "../ContainerProducts/ContainerProductsStyles";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setProducts,
  setStatus,
  setError,
} from "../../redux/allproducts/allProductsSlice";
import LoaderAstro from "../Loader/LoaderAstro";
import CardProduct from "../CardProduct/CardProduct";
import {HeroButton} from "../Hero/HeroStyles"
const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const [url] = useState("https://fakestoreapi.com/products");

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

  return (
    <FeaturedProductsContainer>
      <Title>Productos destacados</Title>
      {status === "loading" && <LoaderAstro />}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && Array.isArray(products) && (
        <Container>
          {products.map((p) => {
            if (p.id === 4 || p.id === 6 || p.id === 7 || p.id === 8) {
              return <CardProduct key={p.id} product={p} />;
            }
            return null;
          })}
        </Container>
      )}
      <HeroButton to={"/products"}>Ver mas</HeroButton>
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
