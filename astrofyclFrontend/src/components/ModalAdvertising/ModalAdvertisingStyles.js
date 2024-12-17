import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(15px) saturate(200%);
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  div {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;

    article {
      display: flex;
      flex-direction: column;
      span {
        font-size: 2rem;
        font-weight: 900;
        letter-spacing: 3px;
        cursor: pointer;
        text-transform: uppercase;
        background: linear-gradient(135deg, #ff9900, #ff6600);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      small {
        color: red;
        letter-spacing: 10px;
        font-size: 1em;
        font-weight: 900;
        background: linear-gradient(135deg, #007bff, #00d084);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
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
