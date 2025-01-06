import styled from "styled-components";

export const FormChangePasswordWrapper = styled.div`
  font-family: var(--funnel);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  // border: 1px solid gold;
  // * {
  //   border: 1px solid gold;
  // }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    border-radius: 10px;
    gap: 15px;
    @media (max-width: 568px) {
      width: fit-content;
    }
    h3 {
      text-align: center;
      color: var(--orange);
      font-weight: bold;
      font-size: 25px;
    }
  }

  label {
    position: relative;
    font-weight: bold;
    font-family: var(--funnel);
    display: flex;
    align-items: center;

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      width: 200px;
      outline: none;
      background: transparent;
      color: white;

      &:focus {
        border-color: var(--orange);
        color: white;
      }
      &::placeholder {
        color: white;
        font-weight: 100;
        font-family: var(--funnel);
      }
    }

    span {
      cursor: pointer;
      position: absolute;
      right: -25px;
    }
  }

  button {
    padding: 12px;
    background-color: var(--orange-dark);
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: var(--funnel);
    &:hover {
      background-color: var(--orange);
    }

    &:focus {
      outline: none;
    }
  }
`;
