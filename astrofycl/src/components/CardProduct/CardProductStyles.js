import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  background-color: white;
  // border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  // background: linear-gradient(135deg, #00d084, #007bff);
  box-shadow: 1px 1px 5px 1px grey;
  
  @media (max-width: 768px) {
    width: 300px;
    padding: 5px;

    Button {
      bottom: 10px;
      left: 20px;
    }
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OriginalPrice = styled.p`
  font-size: 1rem;
  color: #777;
  text-decoration: line-through;
  margin-right: 10px;
`;

export const DiscountPrice = styled.p`
  font-size: 1.5rem;
  color: #e91e63;
  font-weight: bold;
  margin: 0;
`;

export const DiscountTag = styled.span`
  background-color: #ffcc00;
  color: #000;
  font-size: 0.8rem;
  padding: 2px 4px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  text-align: left;
`;

export const Rating = styled.div`
  font-size: 0.9rem;
  color: #f39c12;
  margin-bottom: 10px;
  text-align: right;
  padding: 0 20px 0 0;
`;

export const Star = styled.span`
  color: #f1c40f;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 17px;
  left: 40px;
  font-size: 1rem;
  color: white;
  background-color: #e91e63;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  &:hover {
    background-color: #c2185b;
  }
`;

export const SeeMoreBtnStyled = styled.a`
  background: transparent;
  cursor: pointer;
  font-weight: 900;
  margin-left: 20px;
  &:hover {
    color: #e91e63;
  }
`;
