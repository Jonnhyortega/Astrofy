import styled from "styled-components";

export const MenuWrapper = styled.div`
  margin: 120px auto;
  width: 100%;

  .name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    h2 {
      margin: 0 auto;
      font-size: 30px;
      color: var(--orange);
      font-family: var(--funnel);
    }
  }

  .container-options {
    width: 100%;
  }

  .options {
    margin-top: 15px;
    font-family: var(--funnel);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    article {
      margin-top: 5px;
      border-radius: 5px;
      width: 200px;
      cursor: pointer;
      text-align: left;
      transition: background-color 0.3s ease;
      padding: 8px;
      font-weight: 100;
      &:hover {
        backdrop-filter: blur(12px) saturate(180%);
        background-color: var(--orange-dark);
      }

      a {
        text-decoration: none;
        color: white;
        padding: 5px;
        display: block;
      }
    }

    .edit-name {
      margin: 10px auto;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    label {
      display: block;
      margin: 0 auto;
      color: var(--orange);
    }

    input {
      margin: 0 auto;
      padding: 0.5em;
      background: transparent;
      border: 1px solid grey;
      border-radius: 5px;

      font-family: var(--funnel);
      color: white;
    }

    button {
      padding: 0.5em;
      background-color: var(--orange);
      margin: 0 auto;
      font-family: var(--funnel);
      color: black;
      border: none;
      border-radius: 0.25em;
      cursor: pointer;

      &:hover {
        background-color: white;
      }
    }
  }
`;
