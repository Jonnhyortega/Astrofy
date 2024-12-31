import styled, { keyframes } from "styled-components";
import React from "react";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const orbit = keyframes`
  0% {
    transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
    opacity: 0.65;
  }
  100% {
    transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
    opacity: 0.65;
  }
`;

const Container = styled.div`
  --uib-size: 45px;
  --uib-color: black;
  --uib-speed: 1.75s;
  position: relative;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: ${rotate} calc(var(--uib-speed) * 4) linear infinite;

  .particle {
    position: absolute;
    top: 0%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    &:nth-child(1) { transform: rotate(8deg); }
    &:nth-child(2) { transform: rotate(36deg); }
    &:nth-child(3) { transform: rotate(72deg); }
    &:nth-child(4) { transform: rotate(90deg); }
    &:nth-child(5) { transform: rotate(144deg); }
    &:nth-child(6) { transform: rotate(180deg); }
    &:nth-child(7) { transform: rotate(216deg); }
    &:nth-child(8) { transform: rotate(252deg); }
    &:nth-child(9) { transform: rotate(300deg); }
    &:nth-child(10) { transform: rotate(324deg); }
    &:nth-child(11) { transform: rotate(335deg); }
    &:nth-child(12) { transform: rotate(290deg); }
    &:nth-child(13) { transform: rotate(240deg); }

    &::before {
      content: '';
      position: absolute;
      height: 17.5%;
      width: 17.5%;
      border-radius: 50%;
      background-color: var(--uib-color);
      flex-shrink: 0;
      transition: background-color 0.3s ease;
      animation: ${orbit} var(--uib-speed) linear infinite;
    }
      }
`;

export const LoaderQuantum = () => {
  return (
    <Container>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </Container>
  );
};

export default LoaderQuantum;
