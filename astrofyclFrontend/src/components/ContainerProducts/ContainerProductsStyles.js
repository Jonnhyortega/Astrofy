import styled from "styled-components";
import img from "../../imgs/BackgroundShop/shop-bckg.webp";
export const ContainerWrapper = styled.section`
  margin-top: 100px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;

  @media (max-width: 568px) {
    .banner {
      flex-direction: column;
      gap: 10;
      position: relative;
      &::after {
        content: "hola";
        color: transparent;
        height: 200px;
      }
      select {
        position: absolute;
        top: 50%;
      }
      h4 {
        position: absolute;
        top: -40px;
      }
    }
  }

  .banner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    background: url(${img}) center center / cover fixed no-repeat;
  }
  h4 {
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 5px;
    font-style: italic;
    color: var(--orange);
    font-family: var(--funnel);
    -webkit-text-stroke: 1px rgb(255, 128, 37);
    filter: drop-shadow(1px 1px 10px var(--orange));
  }

  select {
    text-align:right;
    padding: 1em;
    border-radius: 4px;
    border: 2px solid white;
    background: transparent;
    font-weight: bold;
    color: white;
    font-family: var(--funnel);
    font-size: 1em;

     option {
      color: black;
      background: transparent;
      text-align:right;
    }
  }

  .container-products {
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;
