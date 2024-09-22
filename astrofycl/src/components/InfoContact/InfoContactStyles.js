import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`
  background-color: transparent;
  animation: ${fadeIn} 1s ease-in-out;
  padding: 0 2em;
  display:flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  // *{border:1px solid gold;}
`;

export const InfoSection = styled.div`
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const Label = styled.h3`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Info = styled.p`
  font-size: 1.125rem;
  color: black;
  margin: 0;
  line-height: 1.6;
`;

export const MapContainer = styled.div`
  margin-top: 2rem;
  animation: ${fadeIn} 1.2s ease-in-out;

  iframe {
    border: none;
    border-radius: 12px;
    width: 100%;
    height: 350px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    iframe {
      height: 250px;
    }
  }
`;
