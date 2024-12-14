import styled from "styled-components";

export const Modal = styled.div`
  padding: 2em;
  z-index: 2000;
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  border-radius: 10px;
  border: 2px solid var(--orange);
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255);
    backdrop-filter: blur(8px);
    z-index: -1;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: black;
    font-weight: bold;
    text-align: left;
    font-size: 1.5em;
    width: 400px;
    z-index: 2000;
  }

  button {
    background: var(--orange);
    width: auto;
    padding: 0.5em 1em;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    width: 100px;
    font-familiy: var(--funnel);
    
    &:hover {
      background: white;
      color: black;
    }
  }
`;
