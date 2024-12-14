
export const Button = styled.button`
  margin: 0 5px;
  font-size: 1.5rem;
  font-weight: 900;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  background: transparent;

  &:hover {
    color: grey;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 400px;
  background: black;
  border-radius: 8px;
  border: 2px solid #ff9900;
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
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 1s ease;

    &:first-child {
      background-color: #ff4d4d;
      color: white;
    }

    &:first-child:hover {
      background-color: #cc0000;
    }

    &:last-child {
      background-color: green;
    }

    &:last-child:hover {
      background-color: orange;
    }
  }
`;
