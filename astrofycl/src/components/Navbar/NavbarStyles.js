import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  z-index: 10;
  position: fixed;
  width: 100%;
  padding: 0 10px;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  cursor: pointer;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ff9900, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background: linear-gradient(135deg, #007bff, #00d084);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Small = styled.small`
position: absolute;
  color: red;
  bottom:13px;
  left:35px;
  letter-spacing: 5px;
  font-size: .6em;
  font-weight:900;

   background: linear-gradient(135deg, #007bff, #00d084);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ContainerLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  color: white;
  transition: color 0.3s ease;
  text-decoration: none;
  font-weight: 900;

  &:hover {
    color: #ff9900;
  }
`;

export const CartIcon = styled.div`
  position: absolute;
  right: 50px;
  cursor: pointer;
  &:hover {
    color: #ff9900;
    filter: drop-shadow(2px 2px 10px red);
    transition: color 0.3s ease, filter 0.3s ease;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -12px;
  right: -10px;
  background-color: transparent;
  color: #ff9900;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8em;
  text-align: center;
  font-weight: 900;
`;

export const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 30px;
  padding: 10px;
  color: #ff9900;

  @media (max-width: 768px) {
    display: block;
    margin: 0 43% 0 5%;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: black;
  padding-top: 100px;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 9;
`;

export const MobileNavLink = styled(Link)`
  padding: 15px 20px;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, filter 0.3s ease;
  font-weight: bold;

  &:hover {
    color: #ff9900;
    filter: drop-shadow(2px 1px 5px #ff9900);
  }
`;
