import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AboutUsHomeContainer = styled.div`
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
  //   background: transparent;

  //   border: 1px solid rgba(209, 213, 219, 0.3);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-image: url(${(props) => props.backgroundImage});
    // background-size: cover;
    // background-position: center;
    background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100");
    background-position: center;
    z-index: -1;
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 50px;
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.19);
`;

export const HeroText = styled.p`
  color: white;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  max-width: 600px;
  margin-top: 20px;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;
