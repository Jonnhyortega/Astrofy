import React from "react";
import Hero from "../../components/Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import AboutUsHome from "../../components/AboutHome/AboutUsHome";
const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <AboutUsHome />
    </HomeWrapper>
  );
};

export default Home;
