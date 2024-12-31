import styled from "styled-components";

export const LoginForm = styled.form`
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
    border: 1px solid white;
    padding: 10px;
    font-family: var(--ubuntu);
    border-radius: 5px;
    color: white;
    font-weight: 500;

    &::placeholder {
      color: white;
      font-weight: 100;
    }

    &:focus {
      border-color: var(--orange);
      color: var(--orange);
      outline: none;
    }

    &::select {
      border: 1px solid var(--orange);
    }
  }

  button {
    background: var(--orange);
    border: transparent;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background: var(--orange-dark);
    }
  }
  .checkbox {
    font-weight: 100;
    display: flex;
    align-items: center;
    gap: 10px;

    .label-check {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 10px;
    }

    input[type="checkbox"] {
      display: none; /* Oculta el checkbox nativo */
    }

    .custom-checkbox {
      width: 24px;
      height: 24px;
      border: 2px solid var(--orange-dark);
      border-radius: 50%; /* Bordes redondeados */
      background: transparent;
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0 10px var(--orange);
      }
    }

    input[type="checkbox"]:checked + .custom-checkbox {
      background: var(--orange);
      border-color: var(--orange-dark);
      transform: scale(1.1);
    }

    input[type="checkbox"]:checked + .custom-checkbox::after {
      content: "✔";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1rem;
      font-weight: bold;
      animation: checkmark 0.3s ease;
    }

    @keyframes checkmark {
      0% {
        transform: translate(-50%, -50%) scale(0);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`;
