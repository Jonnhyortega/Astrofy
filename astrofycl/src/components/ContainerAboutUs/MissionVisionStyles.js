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

export const FadeInSection = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${({ delay }) => delay || "0s"};
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1);
  }
`;

export const MissionVisionContainer = styled.div`
  border-radius: 20px;
  text-align: center;
  display: flex;
  gap: 20px;
  flex-wrap: no-wrap;
  background-color: rgba(0, 0, 0, 0.739);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MissionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  font-family: "Roboto", sans-serif;
`;

export const MissionContent = styled.p`
  font-size: 18px;
  text-align: left;
  color: white;
  padding: 50px;
  
 @media (max-width: 768px) {
    gap: 20px;
    padding: 15px;
  }

  @media (max-width: 480px) {
      font-size: 13px;
  }
`;
