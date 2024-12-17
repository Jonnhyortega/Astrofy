import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 150px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid var(--orange);
  background: black;
  padding: 1.5em;
  box-shadow: 1px 1px 10px black;
  position: relative;

  @media (max-width: 568px) {
    width: 100px;
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
    color: white;
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-weight: bold;

    @media (max-width: 568px) {
      font-size: 1.1em;
    }
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

    @media(max-width: 568px){
    right: 5px;
    bottom: 5px;
    }

    &:hover {
      color: white;
    }
  }
`;
