import styled from "styled-components";

export const ItemCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: 0 auto 10px auto;
  border-radius: 8px;
  width: 400px;
  color: white;
  border: 1px solid var(--orange);

  img {
    width: 50px;
    height: 60px;
    border-radius: 5px;
  }
  span {
    font-size: 1em;
    font-weight: bold;
  }
  @media (max-width: 568px) {
    justify-content: center;
    gap: 10px;
    width: 350px;
    height: 100px;
  }

  @media (max-width: 468px) {
    width: 268px;
    height: auto;
  }

  @media (max-width: 368px) {
    width: 60%;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  font-family: var(--funnel);
`;
