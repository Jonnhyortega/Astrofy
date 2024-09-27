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
`;

export const StoryContainer = styled.div`
  padding: 10px 80px;
  border-radius: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.539);

  @media (max-width: 1024px) {
    padding: 10px 40px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 30px auto;
  }

  @media (max-width: 480px) {
    padding: 10px 10px;
    margin: 20px auto;
  }
`;

export const StoryTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const StoryContent = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: white;
  text-align: justify;
  text-justify: inter-word;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
  }
`;
