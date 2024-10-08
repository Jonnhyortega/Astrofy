import styled from "styled-components";

export const ItemCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: 0 auto 10px auto;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0);
  width: 400px;
  border: 2px solid #007bff;
  background: white;
  
  @media (max-width: 568px) {
    justify-content: center;
    gap: 10px;
    width: 350px;
    height: 100px;
  }

  @media(max-width: 468px){
  width: 268px;
  height: auto;
  }

  @media (max-width: 368px) {
    width: 60%;
  }
`;

export const ItemThumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
`;

export const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

export const ItemPrice = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
`;

export const ItemControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
  span {
    text-align: center;
    // border: 1px solid black;
    position: absolute;
    top: 1px;
    left: 34px;
  }

  @media(max-width: 468px){
  span{
  // top: 40px;
  }
  }
`;

export const ItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;
