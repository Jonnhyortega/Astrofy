import React from "react";
import styled, { keyframes } from "styled-components";

const rotateAndScale = keyframes`
  0% {
    transform:  scale(0.2);
  }
  25% {
    transform: scale(1.9); 
    box-shadow: 2px 2px 5px 1px black;
  }
  50% {
    transform:  scale(1); 
  }
  75% {
     scale(1.4); 
  }
  100% {
    scale(1); 
  }
`;

const ContainerLogoAstro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  animation: ${rotateAndScale} 3s infinite ease-in-out;

  small {
    color: red;
    letter-spacing: 5px;
    font-size: 0.6em;
    font-weight: 900;
    background: linear-gradient(135deg, #007bff, #00d084);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 3px;
    cursor: pointer;
    text-transform: uppercase;
    background: linear-gradient(135deg, #ff9900, #ff6600);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const LoaderAstro = () => {
  return (
    <ContainerLogoAstro>
      <span>ASTROFY</span>
      <small>cargando...</small>
    </ContainerLogoAstro>
  );
};

export default LoaderAstro;
