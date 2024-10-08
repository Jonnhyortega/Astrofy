import styled from "styled-components";

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

export const ModalContainer = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid #ff9900;
  @media (max-width: 568px) {
    width: 60%;
  }
`;

export const ModalMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 368px) {
    flex-direction: column;
    gap: 5px;
    button {
      width: 100px;
    }
  }
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  background-color: #ff4d4d;
  color: white;

  &:hover {
    background-color: #cc0000;
  }
`;

export const CloseButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: grey;
  }
`;
