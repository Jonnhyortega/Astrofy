import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 68px;
  right: 0;
  height: 70vh;
  width: 400px;
  padding: 3em 1em;
  background-color: grey;
  overflow-y: scroll;
  z-index: 1000;
  box-shadow: 1px 1px 5px black;
  animation: slideIn 0.3s ease-out;
  background: rgb(75, 75, 75);
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color:  #ff9900;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color:  #ff9900;
  }

  ::-webkit-scrollbar-track {
    background-color:  #ff9900;
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

export const Title = styled.div`
  text-align: left;
  font-size: 0.9rem;
  font-weight: 100;
  color: white;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const CartItemsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
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
    color: #007bff;
    font-weight: 100;
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
  margin-top: 10px;
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
    background-color:  #ff9900;
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

export const CloseButton = styled.button`
  position: fixed;
  top: 11%;
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
