import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 2em;
  min-height: 100vh;
  background: linear-gradient(135deg, #2c3e50, #4ca1af);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  div {
    display: flex;
    gap: 10px;
    span {
      color: white;
    }
    a {
      font-weight: bold;
      color: var(--orange);

      &:hover {
        color: var(--orange-bg);
      }
    }
  }
`;
