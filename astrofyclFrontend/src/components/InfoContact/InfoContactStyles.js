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
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const InfoSection = styled.div`
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const Label = styled.h3`
  width: 100%;
  color: #333;
  filter: drop-shadow(1px 1px 1px grey);
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ff9900, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Info = styled.p`
  font-size: 1.125rem;
  color: white;
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
