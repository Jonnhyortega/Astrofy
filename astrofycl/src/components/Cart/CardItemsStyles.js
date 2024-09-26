import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 1px 1px 5px 1px black;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 500px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;

    button {
      padding: 3px 4px;
      font-size: 1.5em;
    }
  }

  @media (max-width: 568px) {
    width: 150px;
    height: 150px;
  }
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
`;

export const Title = styled.div`
  flex-grow: 1;
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 5px;
  }
`;

export const Price = styled.div`
  margin: 0 10px;
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1.1em;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  margin: 0 5px;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 4px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 1px 1px 5px grey;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
  }
`;


export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContainer = styled.div`
  width: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:first-child {
      background-color: #ff4d4d; 
      color: white;
    }

    &:first-child:hover {
      background-color: #cc0000;
    }

    &:last-child {
      background-color: #ddd; 
    }

    &:last-child:hover {
      background-color: #bbb;
    }
  }
`;
