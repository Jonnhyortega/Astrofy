import styled from "styled-components";

export const ContainerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13em 0;
  position: relative;

  select {
    position: absolute;
    top: 130px;
    padding: 1em;
    border-radius: 4px;
    border: 2px solid white;
    background: transparent;
    font-weight: bold;
    color: white;
    font-family: var(--funnel);
    font-size: 1em;
    margin-bottom: 1em;

    option{
    color: black;
    }
  }
`;
