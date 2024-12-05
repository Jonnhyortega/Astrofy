import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerAboutText = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  z-index: 1;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-out;
  
  @media (max-width: 768px) {
    padding: 15px;
    }
    
    @media (max-width: 480px) {
      padding: 10px;
      justify-content: space-between;
  }
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 1;
  box-shadow: 1px 1px 5px 2px black;

  @media (max-width: 768px) {
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;

export const Title = styled.h1`
  animation: ${fadeInUp} 1s ease-out 0.2s backwards;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ff9900, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  color: black;
  padding: 10px;
  text-align: left;
  margin-bottom: 40px;
  animation: ${fadeInUp} 1s ease-out 0.4s backwards;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  font-weight: bold;
  background: rgba(255, 255, 255, 0.700);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0px 50px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0px 20px;
  }
`;

export const ShopButton = styled.button`
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #ff9900;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 1s ease-out 0.6s backwards;

  &:hover {
    background: linear-gradient(135deg, #007bff, #00d084);
    color: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px); 
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 30px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 10px 25px;
  }
`;
