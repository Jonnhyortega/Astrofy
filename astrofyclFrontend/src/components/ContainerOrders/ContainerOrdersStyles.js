import styled from "styled-components";

export const ContainerOrdersWrapper = styled.div`
  font-family: var(--funnel);
  display: flex;
  align-items: center;
  justify-content: center;

  // border: 1px solid gold;
  // * {
  //   border: 1px solid gold;
  // }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    article {
      margin: 0;
      color: white;
      border-radius: 10px 10px 0px 0px;
      border-bottom: 5px solid var(--orange);
      border-top: 1px solid grey;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      padding: 15px;
      width: 90%;

      &:hover {
        background-color: var(--orange-dark);
      }
    }

    li {
      width: 100%;
      list-style: none;
      transition: background-color 0.3s;
      color: white;
      width: content;
      border-bottom: 1px solid grey;
      padding: 25px 0;
    }

    strong {
      color: var(--orange);
    }

    .item-list {
      list-style-type: none;
      padding-left: 0;
      margin: 0;
      
      li {
        display: flex;
        align-items: center;
        gap: 5px;

        @media (max-width: 468px) {
          flex-direction: column;
          gap: 5px;
        }

        p {
          margin: 0;
        }

        .unity {
          color: blue;
          font-family: var(--funnel);
          font-weight: bold;
        }
        span {
          color: #1fff6a;
          margin: 0;
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 20%;
          margin-right: 10px;
        }
      }
    }
  }
`;

export const ToggleDetailsButton = styled.button`
  text-decoration: underline;
  color: white;
  background: transparent;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
