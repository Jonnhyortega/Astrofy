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
  padding: 1.5em;
  border: 1px solid black;
  box-shadow: 1px 1px 5px black;
  position: relative;
  background: white;

  h3 {
    color: black;
    font-family: var(--funnel);
    text-align: center;
    width: 100%;
    position: absolute;
    top: -10px;
  }
  img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
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
    padding: 5px;
    font-weight: 700;
    font-size: 10px;
    &:hover {
      background: var(--orange);
    }
  }
`;
