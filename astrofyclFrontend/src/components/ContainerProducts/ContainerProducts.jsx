import React, { useEffect, useState } from "react";
import { ContainerWrapper } from "./ContainerProductsStyles";
import { fetchProducts } from "../../axios/axios";
import CardProduct from "../CardProduct/CardProduct";
import LoaderAstro from "../Loader/LoaderAstro";

export const ContainerProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("all");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          setError(new Error("No hay productos disponibles."));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading)
    return (
      <ContainerWrapper>
        <LoaderAstro />
      </ContainerWrapper>
    );
  if (error)
    return (
      <ContainerWrapper>
        <p className="error-message">
          Error al cargar productos: {error.message} Reinicie la pagina, o
          vuelva a iniciar sesion, si el problema persiste es probable que sea
          un problema con internet.
        </p>
      </ContainerWrapper>
    );

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <ContainerWrapper>
      <div className="banner">
        <h4>Tienda</h4>
        <select value={category} onChange={handleChange}>
          <option value="all">Todos</option>
          <option value="electronics">Electronica</option>
          <option value="women's clothing">Ropa mujer</option>
          <option value="men's clothing">Ropa hombre</option>
          <option value="jewelery">Joyería</option>
        </select>
      </div>
      <div className="container-products">
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </ContainerWrapper>
  );
};

export default ContainerProducts;
