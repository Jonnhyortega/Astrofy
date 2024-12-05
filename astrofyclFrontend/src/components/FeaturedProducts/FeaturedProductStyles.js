import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: transparent;
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.19);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin: 20px auto;
`;
