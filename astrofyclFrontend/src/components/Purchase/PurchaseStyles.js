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
  margin-top: 6em;
  padding: 2em;
  animation: ${fadeIn} 0.6s ease-out;
  font-family: var(--funnel);
  h2 {
    color: white;
  }
  @media (max-width: 768px) {
    margin: 7em auto;
    box-shadow: 0;
    border-radius: 0;
  }
`;

export const Notification = styled.p`
  margin-top: 2rem;
  padding: 1.2rem;
  border: 1px solid var(--orange);
  border-radius: 10px;
  color: var(--orange);
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-out;
`;
