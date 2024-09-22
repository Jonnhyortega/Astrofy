import React from "react";
import styled from "styled-components";

const ContainerLogoAstro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  padding: 10px;
  position: relative;
  width: 100%;
  box-shadow: 1px 1px 20px 1px black;
  small {
    color: red;
    letter-spacing: 5px;
    font-size: 1em;
    font-weight: 900;
    background: linear-gradient(135deg, #007bff, #00d084);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 3px;
    cursor: pointer;
    text-transform: uppercase;
    background: linear-gradient(135deg, #ff9900, #ff6600);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const LogoHome = () => {
  return (
    <ContainerLogoAstro>
      <span>ASTROFY</span>
      <small>imports</small>
    </ContainerLogoAstro>
  );
};
export default LogoHome;
