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
    margin: auto;
    font-family: var(--funnel);

    > article {
      margin-top: 40px;
      width: 80%;
      cursor: pointer;
      text-align: left;
      transition: background-color 0.3s ease;

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
      margin-top: 20px;
    }

    label {
      display: block;
      margin: 0 0 15px 35px;
      color: var(--orange);
    }

    input {
      margin: 0 0 15px 35px;
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
      margin-left: 10px;
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
