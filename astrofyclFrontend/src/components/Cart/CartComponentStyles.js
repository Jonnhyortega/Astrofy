import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(66, 66, 66, 0.7);
  z-index: 1999;
`;

export const CartContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  padding: 3em 1em;
  overflow-y: scroll;
  z-index: 2000;
  box-shadow: 1px 1px 5px black;
  background-color: black;
  border: 1px solid var(--orange);
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--orange);
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--orange);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--orange);
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: var(--orange);

  @media (max-width: 768px) {
    padding: 0 0 50px 0;
    width: 100%;
    border-radius: 0;
    border:none;
    box-shadow: none;
  }
`;

export const Title = styled.div`
  text-align: left;
  font-size: 35px;
  font-weight: 500;
  font-family: var(--funnel);
  color: var(--orange);
  position: absolute;
  top: 5px;
  left: 10px;
`;

export const CartItemsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 1em 0;

  span {
    color: red;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    transition: .2s;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const CheckoutBox = styled.div`
  width: 90%;
  height: auto;
  margin: 10% auto;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  gap: 5px;
  position: relative;
  margin-top: 20px;
`;

export const CartSubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 5px;

  p {
    font-size: 1em;
    font-weight: 500;
    color: white;
    margin: 0;
  }
`;

export const CartTotal = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 5px;

  .total {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5em;
    font-weight: 700;
    color: white;
    margin: 0;
    text-align: right;
  }

  small {
    color: var(--orange);
    font-weight: 400;
  }

  a {
    font-weight: 100;
    margin-left: 10px;
    font-size: 0.8em;
    color: white;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: grey;
    }
  }
`;

export const CheckoutButton = styled.button`
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  padding: 15px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #ff9900;
  }

  &:active {
    transform: translateY(0.1em);
  }

  p {
    font-size: 2rem;
    font-family: "Dancing Script", cursive;
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: opacity 0.8s ease-in-out;
  }
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-size: 16px;
    color: white;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background: gold;
  }
`;
