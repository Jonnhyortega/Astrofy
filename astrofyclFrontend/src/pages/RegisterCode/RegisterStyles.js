import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  left: 0;
  background: linear-gradient(135deg, #2c3e50, #4ca1af);

  p {
    font-weight: bold;
    font-size: 1.2em;
    padding: 1em;
    color: white;
    font-family: var(--funnel);
  }

  .inputs {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;

    input {
      color: white;
      border: 2px solid var(--orange);
      border-radius: 5px;
      padding: 7px;
      font-weight: bold;
      font-size: 1em;
      text-align: center;
      background: transparent;
      font-family: var(--funnel);
    }
  }

  button {
    font-family: var(--funnel);
    border: 2px solid var(--orange-dark);
    border-radius: 15px;
    width: 100px;
    background: transparent;
    color: var(--orange-dark);
    font-weight: bold;
    padding: 0.6em;
    cursor: pointer;

    &:hover {
      background: var(--orange);
      border: 2px solid transparent;
      color: var(--orange);
    }
  }
`;
