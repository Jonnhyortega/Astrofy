import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  left: 0;
  background: linear-gradient(135deg, #2c3e50, #4ca1af);

  p {
    font-weight: bold;
    font-size: 25px;
    color: var(--orange);
    font-family: var(--funnel);
  }

  .inputs {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;

    label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-family: var(--funnel);
      color: white;
    }
      
    input {
      color: white;
      border: 1px solid white;
      border-radius: 5px;
      padding: 5px;
      font-weight: bold;
      font-size: 1em;
      text-align: center;
      background: transparent;
      font-family: var(--funnel);

      &:focus {
        border-color: var(--orange);
        color: var(--orange); 
        outline: none; 
      }
    }
  }

  .button-verify {
    font-family: var(--funnel);
    border-radius: 5px;
    width: 150px;
    background: var(--orange-dark);
    border: none;
    color: white;
    font-weight: bold;
    padding: 0.6em;
    cursor: pointer;

    &:hover {
      background: var(--orange);
    }
  }
`;
