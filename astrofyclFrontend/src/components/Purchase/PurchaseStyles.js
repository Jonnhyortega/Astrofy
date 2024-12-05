import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 1rem auto;
  margin-top: 6em;
  padding: 2em;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    margin: 7em auto;
    box-shadow: 0;
    border-radius: 0;
    background: white;
  }
`;

export const Message = styled.h1`
  color: #1a5276;
  font-weight: 600;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const Notification = styled.p`
  margin-top: 2rem;
  padding: 1.2rem;
  border: 1px solid #2ecc71;
  border-radius: 10px;
  background-color: #eafaf1;
  color: #27ae60;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-out;
`;
