import React from "react";
import Hero from "../../components/Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import AboutUsHome from "../../components/AboutHome/AboutUsHome";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <AboutUsHome />
      <FeaturedProducts />
    </HomeWrapper>
  );
};

export default Home;
