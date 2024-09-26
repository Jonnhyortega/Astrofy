import styled from "styled-components";
export const Border = styled.div`
  //   // position: absolute;
  //   left: 42%;
  //   border: 4px solid #007bff;
  //   border-radius: 5px;
  //   width: 200px;
  //   height: 150px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   box-shadow: 1px 1px 5px 1px black;
  //   background: linear-gradient(135deg, #ff9900, #ff6600);
  //   background: white;

  //
`;

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  // border: 1px solid gold;
  width: 200px;
  margin: 0 auto;
  // backdrop-filter: blur(16px) saturate(180%);
  //   -webkit-backdrop-filter: blur(16px) saturate(180%);
  //   background-color: rgba(17, 25, 40, 0.75);
  }
`;

export const TotalText = styled.h3`
  font-size: 3rem;
  color: #333;
  margin: 0 auto;
  font-weight: bold;
  background: linear-gradient(135deg, #ff9900, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TotalAmount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin: 0 auto;
  background: #007bff;
  // background: linear-gradient(to bottom, #ff9900, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.6rem;

  &:hover {
    background-color: #218838;
  }
`;

export const CancelButton = styled.button`
  background-color: grey;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.6rem;

  &:hover {
    background-color: #c82333;
  }
`;
