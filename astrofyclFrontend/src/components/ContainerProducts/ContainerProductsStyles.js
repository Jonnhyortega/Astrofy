import styled from "styled-components";
export const ContainerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  background: white;

  .error-message {
    color: red;
    width: 90vw;
    font-family: var(--funnel);
    font-size: 25px;
  }

  @media (max-width: 568px) {
    margin: 0;
  }

  .banner {
    margin-top: 100px;
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
      // justify-content: flex-start;
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
    padding: 0.6em;
    border-radius: 4px;
    border: 1px solid var(--orange);
    font-weight: 400;
    color: black;
    font-family: var(--funnel);
    font-size: 1em;

    option {
      color: black;
      background: transparent;
      text-align: center;
    }
  }

  .container-products {
    margin: 0 0 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    @media (max-width: 568px) {
      gap: 3px;
    }
  }
`;
