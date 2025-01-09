import React from "react";
import {
  AboutUsHomeContainer,
  ContentWrapper,
} from "./AboutUsHomeStyles";
import { HeroButton } from "../Hero/HeroStyles";
import { LogoHome } from "../Loader/LogoHome";

const AboutUsHome = () => {
  return (
    <AboutUsHomeContainer>
      <ContentWrapper>
        <LogoHome />
      </ContentWrapper>
    </AboutUsHomeContainer>
  );
};

export default AboutUsHome;
