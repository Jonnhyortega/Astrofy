import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  font-family: var(--funnel);

  div {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: fix-content;
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
    font-weight: 600;
    text-align: center;
    font-size: 1.5em;
    z-index: 2000;
  }

  .button-modal {
    background: #008633;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    color: white;
    cursor: pointer;
    font-familiy: var(--funnel);
    font-weight: bold;
    font-size: 20px;
    z-index: 3000;

    font-weight: bold;
    &:hover {
      background: #2e7348;
    }
  }
`;
