import styled from "styled-components";
import img from "../../imgs/BackgroundShop/shop-bckg.webp";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 150px;
  text-align: center;
  border-radius: 5px;
  padding: 1.5em;
  box-shadow: 1px 1px 10px black;
  position: relative;
  background: url(${img}) center center / cover fixed no-repeat;
  @media(max-width: 568px) {
    width: 100px;

    button{
    font-size: .7em;
    }
  }

  h3 {
    color: white;
    font-family: var(--funnel);
    font-weight: bold;
    text-align: center;
    width: 100%;
    position: absolute;
    top: -10px;
  }
  img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    border-radius: 2px;
  }
  span {
    font-size: 1.5em;
    color: var(--orange);
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 1em;
    text-align: left;
  }

  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 2px;
    padding: 10px;
    font-weight: 700;
    font-size: 15px;
    color: var(--orange);
    &:hover {
      color: black;
    }
  }
`;
