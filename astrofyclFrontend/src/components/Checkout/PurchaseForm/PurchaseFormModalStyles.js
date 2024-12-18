import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.22);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  // *{border:1px solid gold;}
`;

export const ModalContent = styled.div`
  background: black;
  border: 1px solid var(--orange);
  padding: 10px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: red;
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    color: white;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h2 {
    color: var(--orange);
    font-family: var(--funnel);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: transparent;
  color: white;
`;

export const Checkbox = styled.input`
  color: white;
`;

export const SubmitButton = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  font-family: var(--funnel);
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
