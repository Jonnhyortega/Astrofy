import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const ContainerOfProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 10px 0 100px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  background-color: transparent;
  position: relative;
`;

export const ResponsiveContainer = styled(Container)`
  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 568px) {
    flex-direction: row;
  }
`;

export const BoxCatButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
`;

export const TitleBoxCategories = styled.h4`
  position: absolute;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  color: gold;
  font-weight: 900;
  font-size: 1.5rem;
`;

export const CategoriesButton = styled.button.attrs((props) => ({
  style: {
    background: props.isActive
      ? "linear-gradient(135deg, #ff9900, #ff6600)"
      : "#007bff",
    color: props.isActive ? "black" : "#fff",
    transform: props.isActive ? "scale(1.1)" : null,
    fontWeight: props.isActive ? 800 : 400,
    // border: props.isActive ? "none" : "1px solid white",
  },
}))`
  display: block;
  width: 110px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 7px 10px;
  transition: background-color 0.3s ease, color 0.3s ease, padding 0.3s ease,
  transform 0.3s ease;
  border: 3px solid transparent;
  
  &:hover {
    border: 3px solid white;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #333;
  margin-top: 80px;
  filter: drop-shadow(1px 1px 1px grey);
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ff9900, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const LoadMoreButton = styled.button`
  position: absolute;
  bottom: -95px;
  padding: 10px 20px;
  margin: 20px auto;
  display: block;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: grey;
  }
`;

export const ResponsiveTitleBoxCategories = styled(TitleBoxCategories)`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    top: 10px;
  }
`;
