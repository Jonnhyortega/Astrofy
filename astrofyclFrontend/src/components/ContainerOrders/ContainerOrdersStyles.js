// ContainerOrdersStyles.js
import styled from "styled-components";

export const ContainerOrdersWrapper = styled.div`
  padding: 20px;
  font-family: var(--funnel);

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;

    article {
      color: white;
      border-radius: 10px 10px 0px 0px;
      border-bottom: 5px solid var(--orange);
      border-top: 1px solid grey;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      padding: 15px;

      &:hover {
        background-color: var(--orange-dark);
      }
    }

    li {
      list-style: none;
      margin: 10px 0;
      padding: 15px;
      transition: background-color 0.3s;
      color: white;
      width: content;
      border-bottom: 1px solid grey;
    }

    strong {
      color: var(--orange);
    }

    .item-list {
      list-style-type: none;
      padding-left: 0;

      li {
        display: flex;
        align-items: center;
        gap: 15px;

        @media (max-width: 468px) {
          flex-direction: column;
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
