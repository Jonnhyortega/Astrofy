import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 2px;
  // border: 1px solid grey;
  position: relative;
  // * {
  //   border: 1px solid gold;
  // }

  @media (max-width: 368px) {
  }
  @media (max-width: 268px) {
  }

  .discount {
    color: red;
    font-size: 10px;
    width: 100%;
    text-align: left;

    &:hover {
      color: green;
    }
  }

  .stars {
    margin: 0;
    width: 100%;
    text-align: left;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 2px;
    // border: 1px solid var(--orange-dark);
    margin-top: 25px;
    @media (max-width: 676px) {
      width: 180px;
      height: 180px;
    }
    @media (max-width: 576px) {
      width: 160px;
      height: 160px;
    }
    @media (max-width: 500px) {
      width: 140px;
      height: 140px;
    }
    @media (max-width: 300px) {
      width: 110px;
      height: 110px;
    }
  }

  h3 {
    margin: 0;
    color: black;
    font-family: var(--funnel);
    font-weight: bold;
    text-align: center;
    width: 100%;
  }
  span {
    font-size: 15px;
    color: black;
    width: 100%;
    text-align: left;
    font-weight: bold;
  }

  p {
    font-size: 1em;
    text-align: left;
  }

  button {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 2px;
    padding: 10px;
    width: 100%;
    font-weight: 700;
    font-size: 15px;
    color: black;
    background: rgb(155, 155, 155);
   
    &:hover {
      background: var(--orange);
    }
  }
`;
