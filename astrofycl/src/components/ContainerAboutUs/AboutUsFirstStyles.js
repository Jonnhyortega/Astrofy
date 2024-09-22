import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  animation: ${fadeInUp} 2s ease-out;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;  
  gap: 10px;
  margin: 80px 0 20px 0;
  animation: ${fadeInUp} 1s ease-out 0.8s backwards;
  transition: 1s;
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  box-shadow: 1px 1px 5px black;
  @media (max-width: 768px) {
    gap: 20px;
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    gap: 5px;
    padding: 5px 0px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;
  color: black;
  padding: 7px 18px;
  width: 180px;
  border-radius: 30px;
  transition: all 0.3s ease;
  font-weight: bold;
  text-shadow: 1px 1px 5px rgba(0, 0, 0);
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;

  &:hover {
    background-color: #ff9900;
    color: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
    width: 150px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px;
    width: 130px;
  }
`;

// export const BackgroundFirst = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
//   opacity: 0.9;

//   @media (max-width: 768px) {
//     object-fit: cover;
//   }

//   @media (max-width: 480px) {
//     opacity: 0.8;
//   }
// `;
