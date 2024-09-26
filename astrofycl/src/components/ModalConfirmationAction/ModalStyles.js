
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
