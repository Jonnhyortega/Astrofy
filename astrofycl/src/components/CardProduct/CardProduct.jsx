// CardProduct.js
import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Importa useDispatch para despachar acciones
import {
  Card,
  Image,
  Title,
  OriginalPrice,
  DiscountPrice,
  PriceContainer,
  Description,
  Rating,
  Star,
  SeeMoreBtnStyled,
  Button,
  DiscountTag,
} from "./CardProductStyles";
import Loader from "../Loader/Loader";
import { addToCart } from "../../redux/cart/cartSlice";

const CardProduct = ({ product, status }) => {
  const [seeMore, setSeeMore] = useState(100);
  const dispatch = useDispatch();

  const maxLengthTitle = 20;

  const handleSeeMore = () => {
    seeMore === 100 ? setSeeMore(product.description) : setSeeMore(100);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>
        {product.title.length > maxLengthTitle
          ? product.title.substring(0, maxLengthTitle) + "..."
          : product.title}
      </Title>
      <PriceContainer>
        {product.discountPrice && (
          <>
            <OriginalPrice>${product.originalPrice}</OriginalPrice>
            <DiscountPrice>${product.discountPrice}</DiscountPrice>
            <DiscountTag>{product.discountTag}</DiscountTag>
          </>
        )}
        {!product.discountPrice && (
          <PriceContainer>${Math.ceil(product.price)}</PriceContainer>
        )}
      </PriceContainer>
      <Description>
        {product.description.length > seeMore
          ? product.description.substring(0, seeMore) + "..."
          : product.description}
        <SeeMoreBtnStyled onClick={handleSeeMore}>
          {seeMore === 100 ? "Ver más" : "Ver menos"}
        </SeeMoreBtnStyled>
      </Description>
      <Rating>
        <Star>{"⭐".repeat(Math.floor(product.rating.rate))}</Star>
        <span>({product.rating.count})</span>
      </Rating>
      <Button onClick={handleAddToCart}>Añadir 🛒</Button>
    </Card>
  );
};

export default CardProduct;
