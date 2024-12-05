import styled from "styled-components";

export const WrapperLogin = styled.section`
  width: 100%;
  min-height: 100vh;
  background: transparent;
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