import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 68px;
  right: 0;
  height: 70vh;
  width: 600px;
  padding: 90px 50px 0 50px;
  background-color: grey;
  overflow-y: scroll;
  z-index: 1000;
  box-shadow: 1px 1px 5px black;
  animation: slideIn 0.3s ease-out;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #0056b3;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: #007bff #f0f0f0;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    padding: 0 0 50px 0;
    top: 0;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const Title = styled.h4`
  position: absolute;
  top: -20px;
  text-align: center;
  filter: drop-shadow(2px 2px 3px black);
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ff9900, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CartItemsContainer = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 20%;
    gap: 5px;
  }
`;

export const CheckoutBox = styled.div`
  width: 50%;
  height: 100px;
  margin: 10% auto;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 5px;
  box-shadow: 1px 1px 5px 1px black;
  position: relative;
`;
export const CartTotal = styled.div`
  font-size: 2em;
  font-weight: bold;
  // border: 1px solid #ff6600;
  background: linear-gradient(135deg, #ff9900, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 250;
`;

export const CheckoutButton = styled.button`
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 150px;
  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
  }
`;
export const EmptyButton = styled.button`
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100px;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  div {
    margin: 0 10px;
    font-size: 1rem;
    color: #333;
  }

  span {
    display: flex;
  }

  button {
    margin: 0 5px;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 12%;
  right: 1%;
  background: none;
  border: none;
  font-size: 2em;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    top: -5px;
    right: 0px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff5f5f;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: #ff3f3f;
  }

  &:first-of-type {
    background-color: #4caf50;
    &:hover {
      background-color: #45a049;
    }
  }
`;
