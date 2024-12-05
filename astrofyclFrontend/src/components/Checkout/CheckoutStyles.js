import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  // padding-bottom: 250px;
`;

export const ContainerItems = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr ;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
