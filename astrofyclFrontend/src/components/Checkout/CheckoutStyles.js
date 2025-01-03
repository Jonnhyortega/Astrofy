import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 100px;
  background: black;
  padding: 0 0 3em 0;



  h3 {
    width: 100%;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    padding: 1em 0;
    font-family: var(--funnel);
    color: var(--orange);
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
