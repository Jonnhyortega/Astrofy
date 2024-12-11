import styled from "styled-components";

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin: 20px auto;
  background-color:transparent;
  
  }
`;

export const TotalText = styled.h3`
  font-size: 2rem;
  color: white;
  margin: 0 auto;
  font-weight: bold;
`;

export const TotalAmount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin: 0 auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px auto;
`;

export const FinalizeButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #218838;
  }
`;

export const CancelButton = styled.button`
  background-color: grey;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #c82333;
  }
`;
