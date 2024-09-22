import React from "react";
import { AboutUsContainer, NavLinks, StyledLink } from "./AboutUsFirstStyles";
import { Outlet } from "react-router-dom";
import portadaAstrofyCl from '../../imgs/portada-about-us.jpeg'
export const AboutUsFirst = () => {
  return (
    <AboutUsContainer>
      <NavLinks>
        <StyledLink to={"/about-us/about-us-text"}>Nosotros</StyledLink>
        <StyledLink to={"/about-us/our-story"}>Historia</StyledLink>
        <StyledLink to={"/about-us/mission-vision"}>Misión y Visión</StyledLink>
      </NavLinks>
      <Outlet />
    </AboutUsContainer>
  );
};
