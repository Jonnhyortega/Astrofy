import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #000;
  color: #fff;
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(255, 255, 255, 0);

  .container-icons {
    display: flex;
    gap: 5px;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
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
  font-family: var(--funnel);
  &:hover {
    color: #ff9900;
  }
`;

export const CartIcon = styled.div`
  cursor: pointer;
  transition: 0.6s ease;
  position: relative;
  &:hover {
    color: var(--orange);
    transition: 0.6s ease;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: transparent;
  color: #ff9900;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8em;
  text-align: center;
  font-weight: 900;
`;

export const ProfileIcon = styled.span`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  transition: 0.6s ease;

  &:hover {
    color: var(--orange);
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  color: #ff9900;

  @media (max-width: 768px) {
    display: block;
  }
`;

