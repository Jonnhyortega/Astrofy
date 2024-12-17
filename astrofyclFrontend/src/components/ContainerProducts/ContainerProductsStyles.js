import styled from "styled-components";
export const ContainerWrapper = styled.section`
  margin-top: 80px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  background: black;
  @media (max-width: 568px) {
    margin: 0;
  }

  .banner {
    height: 100px;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;  

    @media (max-width: 568px) {
      width: 100%;
      height: auto;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0;
    }
  }

  h4 {
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 5px;
    font-style: italic;
    color: var(--orange);
    font-family: var(--funnel);
  }

  select {
    margin: 0;
    text-align: center;
    padding: .6em;
    border-radius: 4px;
    border: 1px solid var(--orange);
    background: black;
    font-weight: 400;
    color: white;
    font-family: var(--funnel);
    font-size: 1em;

    option {
      color: white;
      background: transparent;
      text-align: right;
    }
  }

  .container-products {
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;
