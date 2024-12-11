import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  color: #ff9900;
  text-align: center;
  overflow: hidden;
  margin-top: 70px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    53deg,
    rgba(0, 0, 0, 1) 81%,
    rgba(38, 38, 38, 1) 100%
  );
`;
export const Content = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : "none")} 2s
    ease-in-out;
  transition: opacity 0.5s ease;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-transform: uppercase;
  filter: drop-shadow(2px 2px 5px #ff9900);

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #007bff, #00d084);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroButton = styled(NavLink)`
  padding: 5px 20px;
  font-size: 1rem;
  font-weight: 900;
  color: #000;
  background-color: #ff9900;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #000;
    box-shadow: 1px 1px 5px 1px black;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.8rem;
  }
`;
