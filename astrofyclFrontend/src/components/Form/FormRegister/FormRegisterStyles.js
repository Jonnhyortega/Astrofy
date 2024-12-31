import styled from "styled-components";

export const RegisterForm = styled.form`
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1em;
  justify-content: center;
  font-family: var(--funnel);
  h3 {
    top: 100px;
    left: 42%;
    color: var(--orange);
    font-weight: bold;
    font-size: 2em;
    width: 100%;
  }

  .label-password {
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
    position: relative;

    p {
      position: absolute;
      right: 0;
    }
  }

  input,
  button {
    background: transparent;
    border: 1px solid  white;
    padding: 0.6em;
    font-family: var(--ubuntu);
    border-radius: 5px;
    color: white;
    font-weight: 500;

    &:focus {
      border-color: var(--orange);
      outline: none;
    }

    &::placeholder {
      color: white;
      font-weight: 100;
    }

    &::select {
      border: 1px solid var(--orange);
    }
  }

  button {
    background: var(--orange);
    border: transparent;
    cursor: pointer;

    &:hover {
      background: var(--orange-dark);
    }
  }

  input[type="submit"] {
    background: var(--orange);
    border: transparent;
    cursor: pointer;

    &:hover {
      background: var(--orange-dark);
    }
  }
`;
