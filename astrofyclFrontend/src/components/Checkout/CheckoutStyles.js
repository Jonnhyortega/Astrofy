import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 100px;
  background: black;

  // * {
  //   border: 1px solid gold;
  // }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 2em;
  }
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0 auto;
`;
