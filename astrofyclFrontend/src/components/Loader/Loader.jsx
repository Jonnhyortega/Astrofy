import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    animation-delay: 0s;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Dot />
      <Dot />
      <Dot />
    </LoaderContainer>
  );
};

export default Loader;